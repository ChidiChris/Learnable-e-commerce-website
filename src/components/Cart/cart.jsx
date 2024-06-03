import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import CartItems from "./cartItems";
import CartSection from "./addcart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <CartItems />
      <Footer />
    </>
  )
}

export default Cart;