import { totalItems } from "./data";

const CartTotals = () => {
    const isLastElement = (indexElm: number) => {
        return indexElm + 1 === totalItems.length;
    }

    return (
        <div>
            <h4 className="mb-2">Your Total</h4>
            <div className="bg-[var(--lightWhite)] border border-gray-200 mb-5 rounded-lg">
                {
                    totalItems.map(({id, title, price}, index) => (
                        <div key={id} className={`${isLastElement(index)? 'border-none' : 'border-b border-gray-200'} flex justify-between p-3`}>
                            <span className={`${isLastElement(index)? 'font-bold' : ''}`}>{title}</span>
                            <span className={`${isLastElement(index)? 'font-bold' : ''}`}>{price}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CartTotals;