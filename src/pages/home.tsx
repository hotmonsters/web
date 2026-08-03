import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import Invitation from "../components/invitation";
import ScrollAffordance from "../components/scroll-affordance";
import { useWheelNavigate } from "../hooks/use-wheel-navigate";

const Home = () => {
  const navigate = useNavigate();
  const goToDetails = () => navigate("/details");

  useWheelNavigate("down", goToDetails);
  const handlers = useSwipeable({ onSwipedUp: goToDetails });

  return (
    <div className="invitation-page page" {...handlers}>
      <Invitation />
      <ScrollAffordance onClick={goToDetails} />
    </div>
  );
};

export default Home;
