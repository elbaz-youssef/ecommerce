import img1 from '@/assets/products/f1.jpg'
import img2 from '@/assets/products/f2.jpg'
import img3 from '@/assets/products/f3.jpg'
import type { CartItemType } from '../../../types/cart/cart-item.types'
import CartItem from './CartItem'

const CartItems = () => {
    const cartItems: CartItemType[] = [
        {
            id: 1,
            urlImg: img1,
            title: "Cartoon Astronaut T-Shirts",
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            urlImg: img2,
            title: "Cartoon Astronaut T-Shirts",
            price: 120,
            quantity: 1,
        },
        {
            id: 3,
            urlImg: img3,
            title: "Cartoon Astronaut T-Shirts",
            price: 200,
            quantity: 1,
        }
    ]
    return (
        <section className="my-15">
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