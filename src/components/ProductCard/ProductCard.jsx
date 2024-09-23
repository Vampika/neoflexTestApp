import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.css";
import { cartActions } from "../../store/cart.slice";

function ProductCard({ product, modificator, count }) {
  const dispatch = useDispatch();

  const add = (e) => {
    dispatch(cartActions.add(product.id));
  };

  const remove = (e) => {
    dispatch(cartActions.delete(product.id));
  };

  const decrease = (e) => {
    dispatch(cartActions.decrease(product.id));
  };

  if (!modificator)
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={product.image}></img>
        </div>
        <div className={styles.title}>
          <a href="#!">{product.title}</a>
        </div>
        <div className={styles.price}>{product.price} ₽</div>
        <div className={styles.rate}>
          <img src="/icons/star.svg"></img>
          {product.rate}
        </div>
        <div className={styles.button} onClick={add}>
          <button>Купить</button>
        </div>
      </div>
    );

  if (modificator === "big")
    return (
      <div className={styles["big-card"]}>
        <div className={styles["big-card__image"]}>
          <img src={product.image}></img>
        </div>
        <div className={styles["big-card__title"]}>
          <a href="#!">{product.title}</a>
        </div>
        <div className={styles["big-card__price"]}>{product.price} ₽</div>
        <div className={styles["big-card__delete-button"]} onClick={remove}>
          <button>
            <img src="/icons/delete.svg"></img>
          </button>
        </div>
        <div className={styles["big-card__total-price"]}>
          {" "}
          {product.price * count} ₽
        </div>
        <div className={styles["big-card__buttons"]}>
          <button onClick={decrease}>
            <img src="/icons/minus.svg"></img>
          </button>
          {count}
          <button onClick={add}>
            <img src="/icons/plus.svg"></img>
          </button>
        </div>
      </div>
    );
}

export default ProductCard;
