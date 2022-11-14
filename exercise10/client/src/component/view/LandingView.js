import "../../style/view/LandingView.css";
import Main from "../Main";

// Data
import { MAIN_DATA } from "./data.js";

function LandingView() {
  return (
    <Main content={MAIN_DATA[0].content} />
  );
}

export default LandingView;
