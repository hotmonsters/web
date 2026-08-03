import { render, screen } from "@testing-library/react";

import NotFound from "./not-found";

it("renders the 404 page", () => {
  render(<NotFound />);
  expect(screen.getByText("404!")).toBeInTheDocument();
});
