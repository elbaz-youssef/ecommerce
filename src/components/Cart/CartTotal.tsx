import Button from "@/components/common/ui/Button";
import Coupon from "@/components/common/ui/Coupon";
import CartTotals from "@/components/common/ui/CartTotals";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <section className="pb-10">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-10">

                {/* Coupon Section Discount */}
                <Coupon />

                {/* Cart Total Details */}
                <div className="flex-1 sm:border sm:border-gray-100 sm:rounded-2xl sm:p-5">
                    {/* <div c></div> */}
                    {/* <table className="w-full mb-5 bg-[var(--lightGray)]">
                        <tbody>
                             <tr className="block p-5 border-b border-gray-100">
                                <td>Subtotal</td>
                                <td>$420</td>
                            </tr>
                            <tr className="block p-5 border-b border-gray-100">
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr className="block p-5 border-b border-gray-100">
                                <td>Total</td>
                                <td className="text-right">$420</td>
                            </tr>
                        </tbody>
                    </table> */}
                    <CartTotals />
                    <Link to="/checkout">
                        <Button>Proceed to Checkout</Button>
                    </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default CartTotal;