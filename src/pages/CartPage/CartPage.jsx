import styles from "./CartPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useState } from "react";
import Form from "../../components/Form/Form";

function CartPage() {
	const items = useSelector(s => s.cart.items);
	const products = useSelector(p => p.products.items);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="wrapper">
        <section className={styles.cart}></section>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.wrapper}>
          <div className={styles["left-part"]}>
			{items.map(item => <ProductCard product={products.find(i => i.id === item.id)} key={item.id} modificator="big" count={item.count}/>)
}
		  </div>
          <div className={styles["right-part"]}>
            <div className={styles.summary}>
              <div className={styles["summary__row"]}>
                <h2>Итого</h2>
				<span>{
					items.map(i => {
						const product = products.find(p => p.id === i.id);
						if(!product)
							return 0
						return i.count * product.price;
					}).reduce((acc, i) => acc +=i, 0)
					} ₽</span>
              </div>
				<a href="#!"  className={styles["summary__button"]} onClick={() => setModalActive(true)}>Перейти к оформлению</a>

            </div>
          </div>
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}><Form /></ModalWindow>
    </>
  );
}

export default CartPage;
