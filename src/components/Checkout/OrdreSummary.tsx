import Coupon from "@/components/common/ui/Coupon";
import CartTotals from "@/components/common/ui/CartTotals";
import CheckoutItems from "./CheckoutItems";

const OrdreSummary = () => {
  return (
    <div>
        <h3>Ordre Summary</h3>
        <Coupon />
        <CheckoutItems />
        <CartTotals />
    </div>
  )
}

export default OrdreSummary