import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "../../styles/post.module.css";
import time from "../../assets/icon akar-icons-calendar.svg";
import vector from "../../assets/Vector.svg";
import box from "../../assets/tag.svg";
import { FaAngleRight } from "react-icons/fa";

function Post() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className={styles.post}>
        <div className={styles["featured-post-container"]}>
          <div className={styles["featured-post-text"]}>
            <p>Practice Advice</p>
            <h3>Featured Posts</h3>
          </div>
        </div>
        <div className={styles["featured-item"]}>
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className={styles["featured-post-content"]}>
              <div className={styles["box-cnt"]}>
                <img src={box} className={styles.box} alt="box" />
              </div>
              <img
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
              />

              <div className={styles["featured-text-container"]}>
                <nav>
                  <a href="#">{product.category}</a>
                  <a href="#">Trending</a>
                  <a href="#">New</a>
                </nav>

                <div className={styles["featured-text"]}>
                  <h4>{product.title}</h4>

                  <p>{product.description}</p>

                  <div className={styles["date-comment"]}>
                    <div className={styles["date-content"]}>
                      <div className={styles.icon}>
                        <img src={time} alt="calendar icon" />
                      </div>
                      <div className={styles.time}>
                        {formatDate(product.meta.createdAt)}
                      </div>
                    </div>

                    <div className={styles["comment-content"]}>
                      <div className={styles.icon}>
                        <img src={vector} alt="comment icon" />
                      </div>
                      <p>{product.rating} rating</p>
                    </div>
                  </div>

                  <div className={styles["featured-link"]}>
                    <a href="#">
                      Learn More
                      <FaAngleRight
                        style={{
                          color: "#23A6F0",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Post;
