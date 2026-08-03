import { render, fireEvent, screen } from "@testing-library/react";

import Item from "./item";

const monster = {
  contributor: { age: "27", name: "almost" },
  lines: [" IJ", "IaJ"]
};

it("renders the monster without overlay initially", () => {
  const { container } = render(<Item monster={monster} />);
  expect(container.querySelector(".item")).not.toHaveClass("hover");
  expect(container.querySelector("aside")).toBeNull();
});

it("shows contributor credit on hover", () => {
  const { container } = render(<Item monster={monster} />);
  fireEvent.mouseEnter(container.querySelector(".item")!);
  expect(container.querySelector(".item")).toHaveClass("hover");
  expect(screen.getByText("almost, age 27")).toBeInTheDocument();

  fireEvent.mouseLeave(container.querySelector(".item")!);
  expect(container.querySelector("aside")).toBeNull();
});

it("falls back to ??? for nameless contributors", () => {
  const anonymous = {
    contributor: { age: "", name: "" },
    lines: ["a"]
  };
  const { container } = render(<Item monster={anonymous} />);
  fireEvent.mouseEnter(container.querySelector(".item")!);
  expect(screen.getByText("???")).toBeInTheDocument();
});
