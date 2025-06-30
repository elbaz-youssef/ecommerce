import Banner from "../components/common/Banner"
import img from '@/assets/about/banner.png'
import CartItems from "../components/features/cart/CartItems"
import CartTotal from "../components/features/cart/CartTotal"



const Cart = () => {
    return (
        <>
            <Banner urlImg={img} title="#cart" description="Add your coupon code & save up to 70%!" />
            <CartItems />
            <CartTotal />
        </>
    )
}

export default Cart