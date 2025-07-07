import { Heart, ShoppingCart, Star } from "lucide-react"
import type { ProductType } from "../../../types/product.types"

const Product = ({srcImg, altImg, mark, title, stars, price}: ProductType) => {
    return (
        <div
            className="group w-75 border border-gray-200 rounded-2xl transition duration-300 ease-in-out cursor-pointer hover:shadow-lg"
        >
            <div className="relative rounded-t-2xl overflow-hidden mb-2 transition duration-300 group-hover:scale-95 group-hover:rounded-lg">
                <img src={srcImg} alt={altImg} loading="lazy" />
                <span 
                    className="invisible opacity-0 absolute top-5 right-5 transition delay-150 duration-300 ease-in group-hover:visible group-hover:opacity-100"
                >
                    <Heart />
                </span>
            </div>
            <div className="p-3">
                <span className="text-gray-600">{mark}</span>
                <h3 className="transition-colors duration-300 ease-in-out group-hover:text-[var(--primary)]">{title}</h3>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <div className="flex gap-1 mb-2">
                            {Array.from({length: stars}).map((_,index) => (
                                <Star key={index} size={20} className="text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="text-[1.3rem] text-[var(--primary)] font-bold">{price}</span>
                    </div>
                    <span className="cursor-pointer w-12 h-12 rounded-full text-[var(--primary)] bg-[var(--lightPrimary)] flex justify-center items-center transition duration-300 ease-in-out hover:bg-[var(--primary)] hover:text-white">
                        <ShoppingCart />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product