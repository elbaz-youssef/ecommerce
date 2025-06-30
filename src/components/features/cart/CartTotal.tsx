import MainButton from "../../common/buttons/MainButton"

const CartTotal = () => {
  return (
    <section className="py-15">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-10">
                <div>
                    <h4 className="mb-5">Apply Coupon</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input type="text" placeholder="Enter Your Coupon" className="w-60 sm:w-80 border border-gray-100 p-3 rounded-lg" />
                        <MainButton roundedLeft={1}>Apply</MainButton>
                    </div>
                </div>
                <div className="flex-1 sm:border sm:border-gray-100 sm:rounded-2xl sm:p-5">
                    <h4 className="mb-5">Cart Totals</h4>
                    <table className="w-full mb-5">
                        <tr className="">
                            <td className="p-3 border border-gray-100">Cart Subtotal</td>
                            <td className="p-3 border border-gray-100">$420</td>
                        </tr>
                         <tr>
                            <td className="p-3 border border-gray-100">Shipping</td>
                            <td className="p-3 border border-gray-100">Free</td>
                        </tr>
                         <tr>
                            <td className="font-bold p-3 border border-gray-100">Total</td>
                            <td className="font-bold p-3 border border-gray-100">$420</td>
                        </tr>
                    </table>
                    <MainButton roundedLeft={1}>Proceed to Checkout</MainButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartTotal