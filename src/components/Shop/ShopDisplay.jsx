import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/shopdisplay.module.css";

const ArticleSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const product = products[0];

  return (
    <div className={styles["article-mainContainer"]}>
      <div className={styles["article-container"]}>
        <div className={styles["article-header"]}>
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span>(0)</span>
          </p>
        </div>

        {product && (
          <div className={styles["content-container"]}>
            <div
              key={product.id}
              className={styles["article-contentContainer"]}
            >
              <h3>{product.title}</h3>
              <div className={styles.content}>
                <div className={styles["article-content"]}>
                  <h6>{product.description}</h6>
                </div>
                <div className={styles["image-article"]}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleSection;
