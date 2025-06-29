import { ShoppingCart, Star } from "lucide-react"
import type { ProductType } from "../../types/common/product.types"

const Product = ({srcImg, altImg, mark, title, stars, price}: ProductType) => {
    return (
        <div
            key={srcImg}
            className="group w-75 p-3 border border-gray-200 rounded-2xl transition duration-300 ease-in-out cursor-pointer hover:shadow-lg"
        >
            <div className="rounded-lg overflow-hidden mb-2">
                <img src={srcImg} alt={altImg} loading="lazy" />
            </div>
            <span className="text-gray-600">{mark}</span>
            <h3 className="font-bold text-[var(--black)] transition-colors duration-300 ease-in-out group-hover:text-[var(--primary)]">{title}</h3>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <div className="flex gap-1 mb-2">
                        {Array.from({length: stars}).map(_ => (
                            <Star size={20} className="text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <span className="text-[1.3rem] text-[var(--primary)] font-bold">{price}</span>
                </div>
                <span className="cursor-pointer w-12 h-12 rounded-full text-[var(--primary)] bg-[var(--lightPrimary)] flex justify-center items-center transition duration-300 ease-in-out hover:bg-[var(--primary)] hover:text-white">
                    <ShoppingCart />
                </span>
            </div>
        </div>
    )
}

export default Product