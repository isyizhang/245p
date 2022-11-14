import "../style/Sidebar.css";

// External Libraries
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Data Provider
import { DataContext } from './DataProvider';

function Sidebar() {
  const [scroll, setScroll] = useState(0);
  const [_activeIndex, setActiveIndex] = useContext(DataContext);
   
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
      <div className="sidenav" style={sidenavStyle}>
        <Link to="/" onClick={() => setActiveIndex(0)}>Home</Link>
        <Link to="aboutview" onClick={() => setActiveIndex(1)}>About</Link>
        <Link to="weatherview" onClick={() => setActiveIndex(2)}>Weather</Link>
      </div>
    </>
  );
}

export default Sidebar;
