import logoSrc from "../../assets/logo/BrainFlix-logo.svg";
import searchSrc from "../../assets/icons/search.svg";
import imageSrc from "../../assets/images/Mohan-muruge.jpg";
import uploadSrc from "../../assets/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logoSrc} alt="BrainFlix logo" />
        <form className="header__form">
          {/* <div className="header__uploadSection"> */}
            <div className="header__form--search">
              {/* <i className="header__search--icon"></i> */}
              <input
                className="header__form--input"
                type="text"
                id="name"
                name="name"
                placeholder="Search"
              />
              <img className="header__form--image" src={imageSrc} alt="Mohan muruge" />
            </div>
    
         
            <div class="header__form--sbtwrapper">
              <button class="header__form--sbt" type="submit">
                Upload
              </button>
            </div>

          {/* </div> */}
        </form>
      </div>
    </header>
  );
}

export default Header;

