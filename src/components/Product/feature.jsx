import styles from "../../styles/feature.module.css";
import book from "../../assets/bx_bxs-book-reader.svg"
import read from "../../assets/icon cool-icon-153.svg"
import arrow from "../../assets/icon cool-icon-125.svg"

function Feature() {
  return (
    <>
      <div className={styles.feature}>
        <div className={styles["featured-text"]}>
          <h4>Featured Products</h4>
          <h3>THE BEST SERVICES</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>

        <div className={styles["icon-services"]}>
          <div className={styles["service-icon"]}>
            <div className={styles.icon}>
                <img src={book} alt="" />
            </div>
            <div className={styles["icon-text"]}>
              <h3>Easy Wins</h3>
              <p>Get your best looking smile now</p>
            </div>
          </div>

          <div className={styles["service-icon"]}>
            <div className={styles.icon}>
                <img src={read} alt="" />
            </div>
            <div className={styles["icon-text"]}>
              <h3>Easy Wins</h3>
              <p>
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>

          <div className={styles["service-icon"]}>
            <div className={styles.icon}>
                <img src={arrow} alt="" />
            </div>
            <div className={styles["icon-text"]}>
              <h3>Easy Wins</h3>
              <p>Overcame any hurdle or any other problem.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
