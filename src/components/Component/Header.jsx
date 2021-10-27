import logoSrc from "../../assets/logo/BrainFlix-logo.svg";
import searchSrc from "../../assets/icons/search.svg";
import imageSrc from "../../assets/images/Mohan-muruge.jpg";
import uploadSrc from "../../assets/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <img
          className="Header__wrapper--logo"
          src={logoSrc}
          alt="BrainFlix logo"
        />
        <img
          className="Header__wrapper--search"
          src={searchSrc}
          alt="Search bar"
        />
        <img
          className="Header__wrapper--image"
          src={imageSrc}
          alt="Mohan muruge"
        />
        <img
          className="Header__wrapper--upload"
          src={uploadSrc}
          alt="Upload bar"
        />
      </div>
    </header>
  );
}

export default Header;
