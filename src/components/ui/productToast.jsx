import { IoClose } from "react-icons/io5";
import styles from "../../styles/carttoast.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const SuccessSection = ({ product, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles["success-mainContainer"]}>
          <div className={styles["success-container"]}>
            <div className={styles["success-content-1"]}>
              <h3>Successfully added to basket</h3>
              <span onClick={handleClose}>
                <IoClose />
              </span>
            </div>
            <div className={styles["success-content-2"]}>
              <div className={styles["image-content"]}>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className={styles["success-text"]}>
                <p className={styles["text"]}>{product.title}</p>
                <p className={styles["price"]}>€ {product.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

SuccessSection.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessSection;
