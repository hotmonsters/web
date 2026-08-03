import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("packery", () => ({
  default: class {
    layout() {}
    reloadItems() {}
    destroy() {}
  }
}));

import ItemList from "./item-list";

const items = [
  { contributor: { age: "27", name: "almost" }, lines: [" IJ"] },
  { contributor: { age: "5", name: "MOnstever" }, lines: ["AaaB"] }
];

const renderList = (props: {
  items: typeof items;
  loading: boolean;
}) =>
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ItemList {...props} />
    </MemoryRouter>
  );

it("shows the loader while loading", () => {
  const { container } = renderList({ items: [], loading: true });
  expect(container.querySelector(".moon-loader")).toBeInTheDocument();
  expect(container.querySelector(".costume-ideas-list")).toHaveClass(
    "loading"
  );
  expect(container.querySelector(".packery")).toBeNull();
});

it("packs items and renders the fallback copy when loaded", () => {
  const { container } = renderList({ items, loading: false });
  expect(container.querySelector(".moon-loader")).toBeNull();
  expect(
    container.querySelectorAll(".packery .item")
  ).toHaveLength(2);
  expect(
    container.querySelectorAll(".packery-fallback .item")
  ).toHaveLength(2);
});

it("links back to details", () => {
  renderList({ items, loading: false });
  expect(screen.getByText("go back")).toHaveAttribute(
    "href", "/details"
  );
});
