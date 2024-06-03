import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { addToWishlist } from '../../features/wishListSlice';
import styles from '../../styles/cartproduct.module.css';
import star from '../../assets/Group 5.svg';
import { FaRegHeart } from 'react-icons/fa';
import { LuGitCompare } from 'react-icons/lu';
import Button from './button';
import SuccessSection from './productToast';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return <div>Product data is missing</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className={styles['productCart-Container']}>
      <div className={styles['productCart-content-1']}>
        <img src={product.thumbnail} alt={product.title} />

        <h4>{product.category}</h4>

        <div className={styles['likeShare-Container']}>
          <p>{product.discountPercentage}%</p>

          <div className={styles['likeShare-icon']}>
            <div className={styles.share}>
              <LuGitCompare />
            </div>
            <div className={styles.share} onClick={handleAddToWishlist}>
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['productCart-content-2']}>
        <h4>{product.brand || 'Unknown Brand'}</h4>
        <p className={styles.text}>{product.title}</p>
        <div className={styles.txt}>
          <p className={styles.priceTag}>$ {product.price}</p>
          <p className={styles.priceTag2}>$ {product.discountPercentage}</p>
        </div>

        <div className={styles.icons}>
          <img src={star} alt='Star rating' />

          <div className={styles['rate-number']}>
            <span>{product.rating}</span>
            <span>({product.stock})</span>
          </div>
        </div>
      </div>

      <div className={styles['productCart-content-3']}>
        <Button onClick={handleAddToCart}>ADD TO BASKET</Button>
      </div>
      {showSuccess && <SuccessSection product={product} onClose={handleCloseSuccess} />}
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    brand: PropTypes.string, 
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCart;
