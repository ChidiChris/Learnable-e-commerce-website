import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight, FaEye, FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { fetchProducts } from "../../features/productsSlice";
import star from "../../assets/stars.svg";
import styles from "../../styles/carddisplay.module.css";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";

const BATCH_SIZE = 1; 

function Carddisplay() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleNextBatch = () => {
    setCurrentBatchIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex * BATCH_SIZE < products.length ? newIndex : prevIndex;
    });
  };

  const handlePrevBatch = () => {
    setCurrentBatchIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const applyThemeColor = () => {
    document.documentElement.style.setProperty('--theme-color', selectedColor);
  };

  const currentBatch = products.slice(
    currentBatchIndex * BATCH_SIZE,
    (currentBatchIndex + 1) * BATCH_SIZE
  );

  return (
    <div className={styles.card}>
      <div className={styles["hero-mainContainer"]}>
        <div className={styles["shop-links"]}>
          <nav>
            <Link to="/" className={styles["home"]}>
              Home
            </Link>
            <FaAngleRight />
            <a href="#" className={styles["shop"]}>
              Shop
            </a>
          </nav>
        </div>
        <div className={styles["hero-container"]}>
          {currentBatch.map((product) => (
            <div key={product.id} className={styles["hero-content"]}>
              <div className={styles["image-contents"]}>
                <div className={styles["image-content"]}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div
                    className={styles["left-icon"]}
                    onClick={handlePrevBatch}
                  >
                    <FaAngleLeft />
                  </div>
                  <div
                    className={styles["right-icon"]}
                    onClick={handleNextBatch}
                  >
                    <FaAngleRight />
                  </div>
                </div>
                <div className={styles["image-1"]}>
                  {product.images.map((img, index) => (
                    <img key={index} src={img} alt={product.title} />
                  ))}
                </div>
              </div>
              <div className={styles["hero-content-2"]}>
                <h4>{product.title}</h4>
                <div className={styles["icons"]}>
                  <img src={star} alt="Star rating" />
                  <span>{product.rating} Reviews</span>
                </div>
                <h3>${product.price}</h3>
                <h6>
                  Availability:{" "}
                  <span>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                </h6>
                <div className={styles["line"]}></div>
                <div className={styles["color-icons"]}>
                  {["#23a6f0", "#2dc071", "#e77c40", "#252b42"].map((color) => (
                    <span
                      key={color}
                      style={{
                        backgroundColor: color,
                        border:
                          selectedColor === color ? "2px solid white" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => handleColorClick(color)}
                    ></span>
                  ))}
                </div>
                <div className={styles["button-options"]}>
                  <Button
                    style={{
                      backgroundColor: selectedColor
                        ? selectedColor
                        : "#23a6f0",
                    }}
                    onClick={applyThemeColor}
                  >
                    Select Options
                  </Button>
                  <div className={styles["select-icons"]}>
                    <FaRegHeart />
                    <BsCart />
                    <FaEye />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carddisplay;
