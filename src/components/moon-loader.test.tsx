import { render } from "@testing-library/react";

import MoonLoader from "./moon-loader";

it("renders a spinner tinted with the given color", () => {
  const { container } = render(<MoonLoader color="#53195f" />);
  const loader = container.firstChild as HTMLElement;
  expect(loader).toHaveClass("moon-loader");
  expect(loader.style.borderTopColor).toBe("rgb(83, 25, 95)");
});
