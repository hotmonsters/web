import { useState } from "react";

import Monster from "./monster";
import type { MonsterData } from "../hooks/use-monsters";

const Item = ({ monster }: { monster: MonsterData }) => {
  const [hover, setHover] = useState(false);

  const cx = ["item"];
  if (hover) {
    cx.push("hover");
  }

  let overlay = null;
  if (hover && monster.contributor) {
    let contribText = monster.contributor.name || "???";
    if (monster.contributor.age) {
      contribText = `${contribText}, age ${monster.contributor.age}`;
    }

    overlay = (
      <aside>
        <em>contributed by:</em>
        <br />
        <strong>
          {contribText}
        </strong>
      </aside>
    );
  }

  return (
    <div
      className={cx.join(" ")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Monster lines={monster.lines} />
      {overlay}
    </div>
  );
};

export default Item;
