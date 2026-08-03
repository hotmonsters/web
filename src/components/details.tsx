import { Link } from "react-router-dom";

import BorderBox from "./border-box";
import Monster from "./monster";

const monster = [
  "yN",
  "  GB",
  "  IaJEz",
  "Eqpraz",
  "DassC",
  "  GaH",
  "    X"
];

const Details = () => (
  <div className="fixed-aspect-ratio-container">
    <div className="fixed-aspect-ratio">
      <BorderBox className="details">
        <header>
          <Monster lines={monster} />
        </header>

        <h1>HOTMONSTERS.ORG</h1>

        <footer>
          <p style={{ marginTop: "1em" }}>
            <Link to="/monsteragerie">the menagerie</Link>
          </p>
        </footer>
      </BorderBox>
    </div>
  </div>
);

export default Details;
