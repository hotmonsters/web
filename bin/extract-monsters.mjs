#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_COUNT = 76;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationPath = join(
  root, "..", "contracts", "migrations", "6_mint_nfts.js"
);
const outPath = join(root, "public", "monsters.json");

const source = readFileSync(migrationPath, "utf8");

const marker = "const getMonsters = () => [";
const start = source.indexOf(marker);
if (start === -1) {
  throw new Error(`marker not found in ${migrationPath}`);
}

const arrayText = source
  .slice(source.indexOf("[", start))
  .replace(/^\s*\/\/ ?/gm, "");

const monsters = JSON.parse(arrayText);

if (monsters.length !== EXPECTED_COUNT) {
  throw new Error(
    `expected ${EXPECTED_COUNT} monsters, got ${monsters.length}`
  );
}

for (const [index, monster] of monsters.entries()) {
  const { contributor, lines } = monster;
  const valid =
    typeof contributor?.name === "string" &&
    typeof contributor?.age === "string" &&
    Array.isArray(lines) &&
    lines.every((line) => typeof line === "string");
  if (!valid) {
    throw new Error(`malformed monster at index ${index}`);
  }
}

writeFileSync(outPath, `${JSON.stringify(monsters, null, 2)}\n`);
console.log(`wrote ${monsters.length} monsters to ${outPath}`);
