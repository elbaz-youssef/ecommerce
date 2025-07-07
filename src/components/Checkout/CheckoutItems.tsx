import { checkoutItems } from "./data";

const CheckoutItems = () => {
    return (
        <div className="my-8">
            <h4>Your Order</h4>
            <div>
                {
                    checkoutItems.map(({id, urlImg, title, price, quantity}) => (
                        <div key={id} className="flex items-center py-3 border-b border-gray-100">
                            <div className="w-15 h-15 rounded-lg overflow-hidden mr-4">
                                <img src={urlImg} alt="checkout productImg" loading="lazy" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span>{title}</span>
                                <span className="text-xs text-[var(--gray)]">x {quantity}</span>
                            </div>
                            <div className="flex-1">
                                <span className="block font-semibold text-[var(--gray)] text-right">${price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )    
}

export default CheckoutItems