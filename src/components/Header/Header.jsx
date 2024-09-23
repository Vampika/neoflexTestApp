import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const items = useSelector(s => s.cart.items);

  return (
    <div className="wrapper">
      <header className={styles.header}>
      <Link to="/"><Logo /></Link>
        <nav className={styles.navigation}>
			<Link to="/saved">
				<img src="/icons/hearth.svg"></img>
			</Link>
			<Link to="/cart">
			<img src="/icons/basket.svg"></img>
      <span className={styles.count}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
			</Link>
		</nav>
      </header>
    </div>
  );
}

export default Header;
