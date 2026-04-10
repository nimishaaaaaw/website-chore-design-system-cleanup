#!/usr/bin/env node
/**
 * vibe-cli.js: Fallback CLI tool for interacting with Vibe Annotations
 * Use this when MCP servers fail to load in the agent registry.
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import EventSource from "eventsource";

global.EventSource = EventSource;

async function run() {
    const cmd = process.argv[2] || "list";
    const transport = new SSEClientTransport(new URL("http://localhost:3846/sse"));
    const client = new Client({ name: "vibe-cli", version: "1.0.0" }, { capabilities: { tools: {} } });

    try {
        await client.connect(transport);
        
        if (cmd === "list") {
            const result = await client.callTool({ name: "read_annotations", arguments: {} });
            console.log(JSON.stringify(result, null, 2));
        } else if (cmd === "watch") {
            const result = await client.callTool({ name: "watch_annotations", arguments: {} });
            console.log(JSON.stringify(result.data, null, 2));
        } else {
            console.error(`Unknown command: ${cmd}`);
            process.exit(1);
        }
        
    } catch (error) {
        console.error("Vibe CLI Error:", error.message);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

run();
