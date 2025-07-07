import ProductImgs from "./ProductImgs";
import ProductInfo from "./ProductInfo";

const ProductContent = () => {
    return (
        <section className="pt-15">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10">

                    {/* Product Imgs */}
                    <ProductImgs />

                    {/* Product Info */}
                    <ProductInfo />

                </div>
            </div>
        </section>
    )
}

export default ProductContent;