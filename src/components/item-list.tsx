import { Link } from "react-router-dom";

import Item from "./item";
import MoonLoader from "./moon-loader";
import PackedList from "./packed-list";
import type { MonsterData } from "../hooks/use-monsters";

interface ItemListProps {
  items: MonsterData[];
  loading: boolean;
}

const ItemList = ({ items, loading }: ItemListProps) => {
  const rendered = items.map((item, index) => (
    <Item key={index} monster={item} />
  ));

  const classNames = ["costume-ideas-list"];
  if (loading) {
    classNames.push("loading");
  }

  return (
    <div className={classNames.join(" ")}>
      {loading && <MoonLoader color="#53195f" />}
      {!loading && (
        <div className="block">
          <PackedList className="packery">
            {rendered}
          </PackedList>
          <div className="packery-fallback">
            {rendered}
          </div>
        </div>
      )}
      <footer>
        <Link to="/details">go back</Link>
      </footer>
    </div>
  );
};

export default ItemList;
