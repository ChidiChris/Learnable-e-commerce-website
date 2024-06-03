import Navbar from "../Navbar/navbar";
import Carddisplay from "./shopDetails";
import ArticleSection from "./ShopDisplay";
import Footer from "../Footer/footer"
import SponsorSection from "./sponsor";
import ShopProduct from "./showItem";


function Shop() {
  return (
    <>
      <Navbar />
      <Carddisplay />
      <ArticleSection />
      <ShopProduct />
      <SponsorSection />
      <Footer />
    </>
  )
}

export default Shop;