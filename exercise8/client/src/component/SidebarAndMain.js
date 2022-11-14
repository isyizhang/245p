import { useState, useEffect } from "react";
import "../style/SidebarAndMain.css";
import ramen from "../image/ramen.jpg";
import sukiyaki from "../image/sukiyaki.jpg";
import sushi from "../image/sushi.jpg";

function SidebarAndMain() {
  const [scroll, setScroll] = useState(0);
   
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  const sidenavStyle = {
    'height': '100%',
    'width': 160,
    'position': 'fixed',
    'z-index': 1,
    'top': 90-scroll>0 ? 90-scroll : 0,
    'left': 0,
    'background-color': '#111',
    'overflow-x': 'hidden',
    'padding-top': 20
  };

  return (
    <>
      <div className="sidebarandmain">
        <div className="sidenav" style={sidenavStyle}>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="main">
          <h3>Enjoy the most authentic Japanese cuisine in Irvine</h3>
          <div className="images-container">
            <img id="ramen" src={ramen} alt="ramen" />
            <img id="sukiyaki" src={sukiyaki} alt="sukiyaki" />
            <img id="sushi" src={sushi} alt="sushi" />
          </div>
          <p>At Sakura Japanese Cuisine, we use premium ingredients to make the best meal for you.</p>
        </div>
      </div>
    </>
  );
}

export default SidebarAndMain;
