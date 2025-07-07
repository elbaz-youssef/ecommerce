import Banner from "@/components/common/ui/Banner";
import NewsLetter from "@/components/common/ui/NewsLetter";
import Products from "@/components/Shop/Products";
import bannerImg from '@/assets/banner/b1.jpg';

const Shop = () => {
    return (
        <>
            <Banner urlImg={bannerImg} title="#stay home" description="Save more with coupons & up to 70% off!" />
            <Products />
            <NewsLetter />
        </>
    )
}

export default Shop;