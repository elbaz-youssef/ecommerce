import FeaturedProducts from "@/components/Home/FeaturedProducts";
import NewsLetter from "@/components/common/ui/NewsLetter";
import ProductContent from "./ProductContent";

const ProductDetails = () => {
    return (
        <>
            <ProductContent />
            <FeaturedProducts />
            <NewsLetter />
        </>
    )
}

export default ProductDetails;