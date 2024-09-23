import { useSelector } from "react-redux";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

function MainPage() {
  const products = useSelector(s => s.products.items);

  return (
    <>
      <div className="wrapper">
        <ProductsSection title="Наушники" products={products} />
        <ProductsSection title="Беспроводные наушники" products={products} />
      </div>
    </>
  );
}

export default MainPage;
