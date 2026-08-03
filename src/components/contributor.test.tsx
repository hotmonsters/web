import { render, fireEvent, screen } from "@testing-library/react";

import Contributor from "./contributor";

it("shows the user's name and age", () => {
  render(
    <Contributor
      user={{ name: "gnick", age: "28" }}
      onChange={vi.fn()}
    />
  );
  expect(screen.getByPlaceholderText("name")).toHaveValue("gnick");
  expect(screen.getByPlaceholderText("age")).toHaveValue("28");
});

it("reports partial changes", () => {
  const onChange = vi.fn();
  render(<Contributor user={{}} onChange={onChange} />);
  fireEvent.change(screen.getByPlaceholderText("name"), {
    target: { value: "porker" }
  });
  expect(onChange).toHaveBeenCalledWith({ name: "porker" });
  fireEvent.change(screen.getByPlaceholderText("age"), {
    target: { value: "4 milleniums" }
  });
  expect(onChange).toHaveBeenCalledWith({ age: "4 milleniums" });
});
