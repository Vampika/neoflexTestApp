import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsSection.module.css";

function ProductsSection({ title, products }) {

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {
          products && 
          products.map((product, index) => <ProductCard product={product} key={product.id}/>)          
        }
      </div>
    </section>
  );
}

export default ProductsSection;
