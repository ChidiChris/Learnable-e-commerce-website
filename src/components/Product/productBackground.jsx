import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import styles from '../../styles/cartbackground.module.css';
import background from '../../assets/background.jpeg';
import SuccessSection from '../ui/productToast';
import Button from '../ui/button';

function CartBackground() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const sampleProduct = data.products[0];
        setProduct(sampleProduct);
      });
  }, []);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cartBackground}>
      <img src={background} alt="Background" />
      <div className={styles["action-container"]}>
        <p className={styles["p-tag"]}>{product.brand}</p>
        <h2>{product.title}</h2>
        <p className={styles["p-tag2"]}>{product.description}</p>
        <h3>${product.price}</h3>
        <Button onClick={handleAddToCart}>ADD TO CART</Button>
      </div>
      {showSuccess && (
        <SuccessSection product={product} onClose={handleCloseSuccess} />
      )}
    </div>
  );
}

export default CartBackground;
