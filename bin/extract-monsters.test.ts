// @vitest-environment node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

interface MonsterData {
  contributor: { age: string; name: string };
  lines: string[];
}

const monstersPath = fileURLToPath(
  new URL("../public/monsters.json", import.meta.url)
);

const readMonsters = (): MonsterData[] =>
  JSON.parse(readFileSync(monstersPath, "utf8"));

it("contains all 76 monsters", () => {
  expect(readMonsters()).toHaveLength(76);
});

it("preserves migration file order, starting with almost", () => {
  const [first] = readMonsters();
  expect(first.contributor).toEqual({ age: "27", name: "almost" });
  expect(first.lines[0]).toBe(" IJ");
});

it("includes previously commented-out monsters verbatim", () => {
  const monsters = readMonsters();
  const names = monsters.map(({ contributor: { name } }) => name);
  expect(names).toContain("winkolina");
  expect(names).toContain("Colonel Happleblop");
  expect(names).toContain("billy grace hawthorne");
});

it("preserves unicode ages", () => {
  const monsters = readMonsters();
  const billy = monsters.find(
    ({ contributor: { name } }) => name === "billy grace hawthorne"
  );
  expect(billy?.contributor.age).toBe("√19");
});

it("gives every monster string lines", () => {
  for (const monster of readMonsters()) {
    expect(Array.isArray(monster.lines)).toBe(true);
    for (const line of monster.lines) {
      expect(typeof line).toBe("string");
    }
  }
});
