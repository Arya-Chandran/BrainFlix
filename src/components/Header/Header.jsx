import logoSrc from "../../assets/logo/BrainFlix-logo.svg";
import searchSrc from "../../assets/icons/search.svg";
import imageSrc from "../../assets/images/Mohan-muruge.jpg";
import uploadSrc from "../../assets/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__wrapper--logo"
          src={logoSrc}
          alt="BrainFlix logo"
        />
        <img
          className="header__wrapper--search"
          src={searchSrc}
          alt="Search bar"
        />
        <img
          className="header__wrapper--image"
          src={imageSrc}
          alt="Mohan muruge"
        />
        <img
          className="header__wrapper--upload"
          src={uploadSrc}
          alt="Upload bar"
        />
      </div>
    </header>
  );
}

export default Header;
