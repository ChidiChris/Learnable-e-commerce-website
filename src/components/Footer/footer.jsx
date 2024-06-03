import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-content-1"]}>
          <h3>Bandage</h3>
          <div className={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div className={styles["footer-content-2"]}>
          <div className={styles["footer-linkContainer"]}>
            <h5>Company Info</h5>
            <div className={styles["footer-links"]}>
              <nav>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </nav>
            </div>
          </div>

          <div className={styles["footer-linkContainer"]}>
            <h5>Legal</h5>
            <div className={styles["footer-links"]}>
              <nav>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </nav>
            </div>
          </div>

          <div className={styles["footer-linkContainer"]}>
            <h5>Features</h5>
            <div className={styles["footer-links"]}>
              <nav>
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
              </nav>
            </div>
          </div>

          <div className={styles["footer-linkContainer"]}>
            <h5>Resources</h5>
            <div className={styles["footer-links"]}>
              <nav>
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">Api</a>
              </nav>
            </div>
          </div>

          <div className={styles["footer-linkContainer"]}>
            <h5>Get in Touch</h5>
            <div className={styles["footer-input"]}>
              <div className={styles["input-email"]}>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
              <p className={styles.txt}>E-Commerce Web App Design</p>
            </div>
          </div>
        </div>

        <div className={styles["footer-content-3"]}>
          <div className={styles["footer-text"]}>
            <h6 className={styles.txts}>Made With Love By Finland All Right Reserved</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
