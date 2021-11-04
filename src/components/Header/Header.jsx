import logoSrc from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from 'react-router-dom';
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
       <img className="header__logo" src={logoSrc} alt="BrainFlix logo" />
        <form className="header__form">
          <input
            className="header__form--search"
            type="text"
            id="name"
            name="name"
            placeholder="Search"
          />
          <div className="header__form--image"></div>

          <div class="header__form--sbtwrapper">
            <button class="header__form--sbt" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
