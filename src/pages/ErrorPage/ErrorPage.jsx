import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
	return <div className={styles.error}>
		<span>404</span>
		<p>Упс! Такой страницы не существует</p>
		<Link to="/">На главную</Link>
	</div>
}

export default ErrorPage;