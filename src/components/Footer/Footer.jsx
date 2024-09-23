import { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const [lang, setLang] = useState(true);

  const changeLang = () => {
    setLang(!lang);
  }

  console.log(lang);

  return (
    <div className="wrapper">
      <footer className={styles["footer"]}>
      <Link to="/">
          <Logo />
        </Link>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/saved">Избранное</Link>
            </li>
            <li>
              <Link to="/cart">Корзина</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <ul>
            <li className={styles["big-margin"]}>
              <Link to="/rules">Условия сервиса</Link>
            </li>
            <li>
              <div className={styles.languages}>
                <img src="/icons/Lang.svg"></img>
                <button className={lang ? styles.active : ""} onClick={changeLang}>Рус</button>
                <button className={!lang ? styles.active : ""} onClick={changeLang}>Eng</button>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <a href="http://vk.com" target="_blank"><img src="/icons/VK.svg" alt="" /></a>
          <a href="https://web.whatsapp.com/" target="_blank"><img src="/icons/Telegram.svg" alt="" /></a>
          <a href="https://web.telegram.org/" target="_blank"><img src="/icons/Whatsapp.svg" alt="" /></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
