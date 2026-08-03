import { render } from "@testing-library/react";

import BorderBox from "./border-box";

it("wraps children in the double-div border structure", () => {
  const { container } = render(
    <BorderBox className="invitation">
      <p>hi</p>
    </BorderBox>
  );
  const wrapper = container.firstChild as HTMLElement;
  expect(wrapper).toHaveClass(
    "invitation-wrapper", "border-box-wrapper"
  );
  expect(wrapper).not.toHaveClass("thick");
  expect(wrapper.querySelector(".invitation")?.textContent).toBe("hi");
});

it("adds thick class for thickBorder", () => {
  const { container } = render(
    <BorderBox className="invitation" thickBorder />
  );
  expect(container.firstChild).toHaveClass("thick");
});
