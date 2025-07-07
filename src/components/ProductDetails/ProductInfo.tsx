import { useState } from "react";

const itemsNbrStyle = "select-none font-bold text-[1.2rem] cursor-pointer p-1 transition duration-300 hover:text-[var(--primary)]";

const ProductInfo = () => {
    const [nbrAddedToCart, setNbrAddedToCart] = useState(0);

    return (
        <div className="text-center sm:text-left">
            <p className="font-medium">Home/T-Shirt</p>
            <h3 className="mt-5 mb-2">Mens Fashion T-Shirt</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium! Facilis laborum labore distinctio sequi veniam doloremque doloribus dicta itaque, unde quas culpa nostrum repudiandae, expedita quibusdam obcaecati facere inventore sint voluptatibus consequuntur repellendus exercitationem. Harum est voluptatum laborum distinctio, asperiores, minus suscipit saepe unde sed dolore optio cum velit?
            </p>
            <div className="flex justify-center sm:justify-start items-center gap-5">
                <span className="font-bold text-[1.5rem]">$125.00</span>
                <span className="font-bold text-sm px-3 py-1 text-white bg-[var(--black)] rounded-lg">50%</span>
            </div>
            <span className="text-gray-400 font-bold line-through">$300.00</span>
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
                <div className="flex justify-between items-center w-50 p-3 bg-gray-100 rounded-lg">
                    <span 
                        className={itemsNbrStyle}
                        onClick={() => setNbrAddedToCart(nbrAddedToCart > 0? nbrAddedToCart - 1: nbrAddedToCart)}
                    >
                        -
                    </span>
                    <span className="font-bold text-[1.2rem]">{nbrAddedToCart}</span>
                    <span 
                        className={itemsNbrStyle}
                        onClick={() => setNbrAddedToCart(nbrAddedToCart + 1)}
                    >
                        +
                    </span>
                </div>
                <div className="w-50 sm:flex-1">
                    <button className="w-full p-4 bg-[var(--primary)] text-white font-bold rounded-lg cursor-pointer">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo