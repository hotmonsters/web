import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import DetailsComponent from "../components/details";
import ScrollAffordance from "../components/scroll-affordance";
import { useWheelNavigate } from "../hooks/use-wheel-navigate";

const Details = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  useWheelNavigate("up", goHome);
  const handlers = useSwipeable({ onSwipedDown: goHome });

  return (
    <div className="details-page page" {...handlers}>
      <ScrollAffordance direction="up" onClick={goHome} />
      <DetailsComponent />
    </div>
  );
};

export default Details;
