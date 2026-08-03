import { render } from "@testing-library/react";

import Monster from "./monster";

const lines = [" IJ", "IaJ", "STU"];

it("renders one pre per line in the monsters typeface", () => {
  const { container } = render(<Monster lines={lines} />);
  const pres = container.querySelectorAll("pre");
  expect(pres).toHaveLength(3);
  expect(pres[0]).toHaveTextContent("IJ");
  expect(pres[0].style.fontFamily).toBe("monsters");
});

it("preserves leading whitespace", () => {
  const { container } = render(<Monster lines={lines} />);
  expect(container.querySelector("pre")?.textContent).toBe(" IJ");
});

it("applies base and extra class names", () => {
  const { container } = render(
    <Monster lines={lines} className="extra" />
  );
  expect(container.firstChild).toHaveClass(
    "monster", "no-select", "extra"
  );
});
