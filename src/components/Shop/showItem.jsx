import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import Product from "../ui/product";
import styles from "../../styles/shopproduct.module.css";

function ShopProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const INITIAL_DISPLAY_COUNT = 8;
  
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.products}>
      <div className={styles["products-txt"]}>
      <h3>BESTSELLERS PRODUCTS</h3>
      </div>
      <Product
        products={products.slice(0, INITIAL_DISPLAY_COUNT)}
        title=""
        subtitle=""
        description=""
      />
    </div>
  );
}

export default ShopProduct;
