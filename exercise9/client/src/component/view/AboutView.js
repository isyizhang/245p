import "../../style/view/AboutView.css";
import Main from "../Main";

// Data
import { MAIN_DATA } from "./data.js";

function AboutView() {
  return (
    <Main content={MAIN_DATA[1].content} />
  );
}

export default AboutView;
