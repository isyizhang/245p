import "../style/Header.css";
import logo from "../image/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <img id="logo" src={logo} alt="company logo" />
        <a href="#default" className="logo">
          Sakura Japanese Cuisine
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;
