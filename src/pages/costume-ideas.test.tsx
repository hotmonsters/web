import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("packery", () => ({
  default: class {
    layout() {}
    reloadItems() {}
    destroy() {}
  }
}));

import CostumeIdeas from "./costume-ideas";

afterEach(() => {
  vi.unstubAllGlobals();
});

it("loads monsters and renders the ribbon gallery", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([
      { contributor: { age: "27", name: "almost" }, lines: [" IJ"] }
    ])
  }));

  const { container } = render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <CostumeIdeas />
    </MemoryRouter>
  );

  expect(screen.getByText("enter lab here")).toBeInTheDocument();
  expect(
    container.querySelector(".add-button")
  ).toHaveAttribute("href", "/editor");

  await waitFor(() =>
    expect(container.querySelectorAll(".item")).toHaveLength(2)
  );
});
