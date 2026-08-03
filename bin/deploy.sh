#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-hotmonsters.org}"
DEST="${2:-/home/public}"

cd "$(dirname "$0")/.."

# No --delete: the NFSN web root may hold files that are not part of
# this build, and they must survive deploys.
npm run build
rsync -avz dist/ "$TARGET:$DEST/"

echo "deployed to $TARGET:$DEST"
