import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import { nextSlide, prevSlide } from "../../features/apiSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import styles from "../../styles/slide.module.css";

function Slide() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const batchIndex = useSelector((state) => state.slider.value);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const itemsPerBatch = 4;
  const start = batchIndex * itemsPerBatch;
  const end = start + itemsPerBatch;
  const displayedProducts = products.slice(start, end);

  const showNextBatch = () => {
    if ((batchIndex + 1) * itemsPerBatch < products.length) {
      dispatch(nextSlide());
    }
  };

  const showPrev = () => {
    if (batchIndex > 0) {
      dispatch(prevSlide());
    }
  };

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles["product-container"]}>
        {displayedProducts.map((product, index) => (
          <div key={index} className={styles[`furniture-content`]}>
            <div>
              <img
                src={product.thumbnail}
                className={styles.image}
                alt={`Product ${index + 1}`}
              />
            </div>

            <div className={styles[`furniture-item`]}>
              <p>{product.stock} Item</p>
              <h2>{product.category.toUpperCase()}</h2>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["btn-grp"]}>
        <button onClick={showPrev}>
          <GoDotFill />
        </button>
        <button onClick={showNextBatch}>
          <GoDotFill />
        </button>
      </div>
      <button onClick={showPrev} className={styles.showPrev}>
        <FaAngleLeft />
      </button>
      {(batchIndex + 1) * itemsPerBatch < products.length && (
        <button onClick={showNextBatch} className={styles.showMore}>
          <FaAngleRight />
        </button>
      )}
    </div>
  );
}

export default Slide;
