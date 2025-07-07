import Banner from "@/components/common/ui/Banner";
import bannerImg from '@/assets/about/banner.png';
import CartItems from "@/components/Cart/CartItems";
import CartTotal from "@/components/Cart/CartTotal";

const Cart = () => {
    return (
        <>
            <Banner urlImg={bannerImg} title="#cart" description="Add your coupon code & save up to 70%!" />
            <CartItems />
            <CartTotal />
        </>
    )
}

export default Cart