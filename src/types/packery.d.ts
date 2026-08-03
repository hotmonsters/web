declare module "packery" {
  export default class Packery {
    constructor(element: Element, options?: object);
    layout(): void;
    reloadItems(): void;
    destroy(): void;
  }
}
