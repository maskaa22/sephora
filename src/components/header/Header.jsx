import c from "./Header.module.css";
import Navigation from "../navigation/Navigation";
import { useDecktop, useMobile } from "../../utils/hooks";

const Header = () => {
  const isMobile = useMobile();
  const isDecktop = useDecktop();

  return (
    <header className={c.header}>
      <div className="small-container">
        <div className={c.innerContainer}>
          <a href="/">
            <img
              src={isMobile ? "/img/logo.png" : "/img/logo-deck.png"}
              alt="SEPHORA"
              className={c.logo}
            />
          </a>

          <div className={c.searchWrapper}>
            <svg className={c.searchIcon}>
              <use href="/icon-sprite.svg#icon-search"></use>
            </svg>

            <input placeholder="Search" className={c.search} />
          </div>

          {isDecktop && <Navigation />}

          <div className={c.linkContainer}>
            <a className={c.linkIcon}>
              <svg className={c.icon}>
                <use href="/icon-sprite.svg#icon-favorite"></use>
              </svg>
            </a>
            <a className={c.linkIcon}>
              <svg className={c.icon}>
                <use href="/icon-sprite.svg#icon-basket"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
