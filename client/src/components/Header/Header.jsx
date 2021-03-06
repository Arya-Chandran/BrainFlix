import logoSrc from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logoSrc} alt="BrainFlix logo" />
        </Link>

        <form className="header__form">
          <input
            className="header__form--search"
            type="text"
            id="name"
            name="name"
            placeholder="Search"
          />
          <div className="header__form--image"></div>

          <div className="header__form--sbtwrapper">
            <Link to="/upload">
              <button className="header__form--sbt" type="submit">
                Upload
              </button>
            </Link>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
