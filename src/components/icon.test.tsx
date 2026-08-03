import { render } from "@testing-library/react";

import Icon from "./icon";

it("renders a font-awesome <i> element", () => {
  const { container } = render(<Icon name="plus" />);
  expect(container.querySelector("i")).toHaveClass("fa", "fa-plus");
});

it("applies size class when given", () => {
  const { container } = render(
    <Icon name="angle-double-down" size="2x" />
  );
  expect(container.querySelector("i")).toHaveClass(
    "fa", "fa-angle-double-down", "fa-2x"
  );
});
