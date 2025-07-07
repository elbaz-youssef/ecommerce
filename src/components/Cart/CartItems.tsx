import CartItem from './CartItem';

import { cartItems } from './data';

const CartItems = () => {
    return (
        <section className="py-25">
            <div className="container">
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[750px] w-full border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Quantity</th>
                                <th className="px-4 py-3">Total Price</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(({ id, urlImg, title, price, quantity }) => (
                                    <CartItem
                                        key={id}
                                        id={id}
                                        urlImg={urlImg}
                                        title={title}
                                        price={price}
                                        quantity={quantity}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default CartItems