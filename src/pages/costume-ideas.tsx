import { Link } from "react-router-dom";

import BorderBox from "../components/border-box";
import Icon from "../components/icon";
import ItemList from "../components/item-list";
import { useMonsters } from "../hooks/use-monsters";

const CostumeIdeas = () => {
  const { monsters, loading } = useMonsters();

  return (
    <BorderBox className="costume-ideas">
      <header className="ribbon-header">
        <div className="ribbon-wrapper">
          <div className="ribbon-front">
            <div className="text">
              enter lab here
              <Link className="add-button" to="/editor">
                <Icon name="plus" />
              </Link>
            </div>
          </div>
          <div className="ribbon-edge-topleft"></div>
          <div className="ribbon-edge-topright"></div>
          <div className="ribbon-edge-bottomleft"></div>
          <div className="ribbon-edge-bottomright"></div>
          <div className="ribbon-back-left"></div>
          <div className="ribbon-back-right"></div>
        </div>
      </header>
      <article>
        <ItemList items={monsters} loading={loading} />
      </article>
    </BorderBox>
  );
};

export default CostumeIdeas;
