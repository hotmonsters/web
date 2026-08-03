import { renderHook, waitFor } from "@testing-library/react";

import { useMonsters } from "./use-monsters";

const fixture = [
  {
    contributor: { age: "27", name: "almost" },
    lines: [" IJ", "IaJ"]
  }
];

afterEach(() => {
  vi.unstubAllGlobals();
});

it("fetches /monsters.json", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(fixture)
  }));

  const { result } = renderHook(() => useMonsters());
  expect(result.current.loading).toBe(true);

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.monsters).toEqual(fixture);
  expect(fetch).toHaveBeenCalledWith("/monsters.json");
});

it("reports errors", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    ok: false,
    status: 500
  }));

  const { result } = renderHook(() => useMonsters());
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.error).toBeInstanceOf(Error);
  expect(result.current.monsters).toEqual([]);
});
