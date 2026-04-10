#!/usr/bin/env node
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import EventSource from "eventsource";
import { execSync } from "child_process";
import path from "path";

// Polyfill EventSource for Node.js
global.EventSource = EventSource;

async function run() {
    // 1. Connect to Vibe Annotations Server (SSE)
    const transport = new SSEClientTransport(
        new URL("http://localhost:3846/sse")
    );

    const client = new Client(
        { name: "vibe-proxy-client", version: "1.0.0" },
        { capabilities: { tools: {} } }
    );

    try {
        await client.connect(transport);
    } catch (error) {
        console.error("Failed to connect to Vibe Annotations. Attempting restart...");
        try {
            const projectRoot = "/Users/yeswanth/Documents/Medikloud_Tech/Website/Website_Part2";
            execSync(".agent/vibe-start.sh", { cwd: projectRoot, stdio: "inherit" });
            // Wait and retry once
            await new Promise(r => setTimeout(r, 2000));
            await client.connect(transport);
        } catch (innerError) {
            console.error("Self-healing failed:", innerError.message);
            process.exit(1);
        }
    }

    // 2. Start Stdio Server for the Agent
    // Explicitly declare we only support tools, mirroring Vibe
    const server = new Server(
        { name: "vibe-proxy-server", version: "1.0.0" },
        { capabilities: { tools: {} } }
    );

    // Forward ListTools
    server.setRequestHandler(ListToolsRequestSchema, async () => {
        try {
            return await client.listTools();
        } catch (error) {
            console.error("Error listing tools from Vibe:", error);
            return { tools: [] };
        }
    });

    // Forward CallTool
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        try {
            const result = await client.callTool({
                name: request.params.name,
                arguments: request.params.arguments,
            });
            return result;
        } catch (error) {
            console.error(`Error calling tool ${request.params.name}:`, error);
            throw error;
        }
    });

    // Start Stdio transport
    const stdioTransport = new StdioServerTransport();
    await server.connect(stdioTransport);
}

run().catch((error) => {
    console.error("Proxy error:", error);
    process.exit(1);
});
