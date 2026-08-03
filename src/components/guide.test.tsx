import { render } from "@testing-library/react";

import Guide from "./guide";

it("renders all 65 glyphs with typeface and plaintext views", () => {
  const { container } = render(<Guide />);
  const glyphs = container.querySelectorAll(".guide-glyph");
  expect(glyphs).toHaveLength(65);
  expect(
    glyphs[0].querySelector(".monster-typeface")?.textContent
  ).toBe("a");
  expect(glyphs[0].querySelector(".plaintext")?.textContent).toBe("a");
});
