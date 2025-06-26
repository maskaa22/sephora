import c from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={c.list}>
        <li className={c.item}>
          <a className={c.link} href="#">
            <svg className={c.icon}>
              <use href="/icon-sprite.svg#icon-shops"></use>
            </svg>
            <div className={c.shop}>
              <p className={c.title}>Shops and Services</p>
              <p className={c.text}>Choose your store.</p>
            </div>
          </a>
        </li>

        <li className={c.item}>
          <a className={c.link} href="#">
            <svg className={c.icon}>
              <use href="/icon-sprite.svg#icon-community"></use>
            </svg>
            <p className={c.title}>Community</p>
          </a>
        </li>
        <li className={c.item}>
          <a className={c.link} href="#">
            <svg className={c.icon}>
              <use href="/icon-sprite.svg#icon-login"></use>
            </svg>
            <div className={c.delivery}>
              <p className={c.title}>Log in</p>
              <p className={c.text}>for FREE delivery 🚚</p>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
