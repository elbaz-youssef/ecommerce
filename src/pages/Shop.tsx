import Banner from "../components/common/Banner"
import NewsLetter from "../components/features/home/NewsLetter"
import Products from "../components/features/shop/Products"

const Shop = () => {
  return (
    <>
        <Banner urlImg="src/assets/banner/b1.jpg" title="#stay home" description="Save more with coupons & up to 70% off!" />
        <Products />
        <NewsLetter />
    </>
  )
}

export default Shop