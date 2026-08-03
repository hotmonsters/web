#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-hotmonsters.org}"
DEST="${2:-/srv/hotmonsters}"

cd "$(dirname "$0")/.."

npm run build
rsync -avz --delete dist/ "$TARGET:$DEST/"

echo "deployed to $TARGET:$DEST"
