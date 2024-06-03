import PropTypes from "prop-types";
import ProductCart from "./productCard";
import styles from "../../styles/productcontainer.module.css";

function Product({ products, title, subtitle, description, displayCount }) {
  return (
    <div className={styles.product}>
      <div className={styles["product-txt"]}>
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
      <div className={styles["product-content"]}>
        {products.slice(0, displayCount).map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      discountPercentage: PropTypes.number.isRequired,
      brand: PropTypes.string,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  displayCount: PropTypes.number,
};

export default Product;
