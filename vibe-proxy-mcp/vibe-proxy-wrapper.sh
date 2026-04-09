#!/bin/bash
PROJECT_ROOT="/Users/yeswanth/Documents/Medikloud_Tech/Website/Website_Part2"
cd "$PROJECT_ROOT"
mkdir -p .vibe-local
export HOME="$PROJECT_ROOT/.vibe-local"
export npm_config_cache="$PROJECT_ROOT/.vibe-local/npm-cache"

# Start daemon if not running
if ! curl -s http://localhost:3846/health > /dev/null; then
  echo "Starting Vibe Daemon..." >&2
  npx -y vibe-annotations-server start --daemon
  sleep 3
fi

# Run proxy
echo "Starting Vibe Proxy..." >&2
exec node .agent/vibe-proxy/index.js
