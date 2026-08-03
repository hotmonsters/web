import { render } from "@testing-library/react";

const layout = vi.fn();
const reloadItems = vi.fn();
const destroy = vi.fn();
const constructed = vi.fn();

vi.mock("packery", () => ({
  default: class {
    constructor(element: Element, options?: object) {
      constructed(element, options);
    }
    layout = layout;
    reloadItems = reloadItems;
    destroy = destroy;
  }
}));

import PackedList from "./packed-list";

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it("initializes packery on mount and destroys on unmount", () => {
  const { container, unmount } = render(
    <PackedList className="packery">
      <div>child</div>
    </PackedList>
  );
  expect(constructed).toHaveBeenCalledWith(
    container.firstChild, {}
  );
  unmount();
  expect(destroy).toHaveBeenCalled();
});

it("relayouts 1s after children change (font-load fudge)", () => {
  const { rerender } = render(
    <PackedList><div key="a" /></PackedList>
  );
  rerender(
    <PackedList><div key="a" /><div key="b" /></PackedList>
  );
  vi.advanceTimersByTime(1000);
  expect(reloadItems).toHaveBeenCalled();
  expect(layout).toHaveBeenCalled();
});
