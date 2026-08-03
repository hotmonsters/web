import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Home from "./home";

const renderHome = () =>
  render(
    <MemoryRouter
      initialEntries={["/"]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<p>details page</p>} />
      </Routes>
    </MemoryRouter>
  );

it("renders the invitation with a scroll affordance", () => {
  const { container } = renderHome();
  expect(container.querySelector(".invitation")).toBeInTheDocument();
  expect(
    container.querySelector(".scroll-affordance i")
  ).toHaveClass("fa-angle-double-down");
});

it("navigates to details on wheel down", () => {
  renderHome();
  act(() => {
    window.dispatchEvent(new WheelEvent("wheel", { deltaY: 100 }));
  });
  expect(screen.getByText("details page")).toBeInTheDocument();
});
