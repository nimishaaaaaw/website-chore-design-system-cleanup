#!/bin/bash
# vibe-start.sh: Persistent Daemon Startup logic
PROJECT_ROOT="/Users/yeswanth/Documents/Medikloud_Tech/Website/Website_Part2"
cd "$PROJECT_ROOT" || exit 1

# Isolated home and cache for vibe daemon
export HOME="$PROJECT_ROOT/.vibe-local"
export npm_config_cache="$PROJECT_ROOT/.vibe-local/npm-cache"

# Ensure log directory exists
mkdir -p "$HOME/.vibe-annotations"

# Check if already running
if curl -s http://localhost:3846/health > /dev/null; then
    echo "$(date): Vibe Daemon is already running."
    exit 0
fi

echo "$(date): Starting Vibe Daemon..."
npx -y vibe-annotations-server start --daemon

# Wait for startup
for i in {1..30}; do
    if curl -s http://localhost:3846/health > /dev/null; then
        echo "$(date): Vibe Daemon started successfully."
        exit 0
    fi
    sleep 1
done

echo "$(date): Failed to start Vibe Daemon after 30 seconds."
exit 1
