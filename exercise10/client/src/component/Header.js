import "../style/Header.css";
import logo from "../image/logo.png";

// External Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Data Provider
import { DataContext } from './DataProvider';

function Header() {
  const [activeIndex, setActiveIndex] = useContext(DataContext);

  return (
    <>
      <div className="header">
        <img id="logo" src={logo} alt="company logo" />
        <a href="#default" className="logo">
          Sakura Japanese Cuisine
        </a>
        <div className="headerRight">
          <Link to="/" className={activeIndex===0 ? 'active' : ''} onClick={() => setActiveIndex(0)}>Home</Link>
          <Link to="aboutview" className={activeIndex===1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>About</Link>
          <Link to="weatherview" className={activeIndex===2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>Weather</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
