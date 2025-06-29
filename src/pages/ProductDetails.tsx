import FeaturedProducts from "../components/features/home/FeaturedProducts"
import NewsLetter from "../components/features/home/NewsLetter"
import ProductInfo from "../components/features/productDetails/ProductInfo"

const ProductDetails = () => {
    return (
        <>
            <ProductInfo />
            <FeaturedProducts />
            <NewsLetter />
        </>
    )
}

export default ProductDetails