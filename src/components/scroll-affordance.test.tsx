import { render, fireEvent } from "@testing-library/react";

import ScrollAffordance from "./scroll-affordance";

it("defaults to a down arrow", () => {
  const { container } = render(<ScrollAffordance />);
  expect(container.querySelector("i")).toHaveClass(
    "fa-angle-double-down"
  );
});

it("renders an up arrow and fires onClick", () => {
  const onClick = vi.fn();
  const { container } = render(
    <ScrollAffordance direction="up" onClick={onClick} />
  );
  expect(container.querySelector("i")).toHaveClass(
    "fa-angle-double-up"
  );
  fireEvent.click(container.querySelector(".scroll-affordance")!);
  expect(onClick).toHaveBeenCalled();
});
