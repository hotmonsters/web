# hotmonsters.org

where the hottest monsters go to party.

A menagerie of user-submitted monster drawings made with the Monster
Generator typeface ((c) Fenotype, fenotype.com — used with license).
Originally built in 2015; revived in 2026 on Vite + React +
TypeScript. Currently read-only: the editor works in your browser,
and submissions are hibernating until the intake service returns.

## Development

    npm install
    npm run dev        # http://localhost:1337
    npm test

## Data

All 76 monsters live in `public/monsters.json`, extracted from the
original site database (preserved in
`../contracts/migrations/6_mint_nfts.js`):

    npm run extract-monsters

## Deploy

    ./bin/deploy.sh [host]

Builds and rsyncs `dist/` to the VPS. See `deploy/Caddyfile` for the
server config.