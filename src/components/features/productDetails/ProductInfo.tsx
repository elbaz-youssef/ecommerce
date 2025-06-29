import type { ProductType } from '../../../types/common/product.types';

import img1  from '@/assets/products/f1.jpg';
import img2  from '@/assets/products/f2.jpg';
import img3  from '@/assets/products/f3.jpg';
import img4  from '@/assets/products/f4.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductInfo = () => {
    const [activeThumbnail, setActiveThumbnail] = useState(1);
    const [activeSrcImg, setActiveSrcImg] = useState(img1);
    const [nbrAddedToCart, setNbrAddedToCart] = useState(0);
    const chevronStyle = "absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--black)] text-white flex justify-center items-center transition duration-300 ease-in-out cursor-pointer hover:bg-[var(--primary)]";
    const itemsNbrStyle = "select-none font-bold text-[1.2rem] cursor-pointer p-1 transition duration-300 hover:text-[var(--primary)]";
    const productInfo: ProductType[] = [
        {
            srcImg: img1,
            altImg: 'product1',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img2,
            altImg: 'product2',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img3,
            altImg: 'product3',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img4,
            altImg: 'product4',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        }
    ];

    useEffect(() => {
        switch(activeThumbnail) {
            case 1:
                setActiveSrcImg(img1);
                break;
            case 2:
                setActiveSrcImg(img2);
                break;
            case 3:
                setActiveSrcImg(img3);
                break;
            case 4:
                setActiveSrcImg(img4);
                break;
            default:
                setActiveSrcImg(img1);
        }
    }, [activeThumbnail])

    return (
        <section className="pt-15">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10">
                    <div>
                        <div className="relative rounded-2xl max-h-120 overflow-hidden">
                            <img src={activeSrcImg} alt="active product image" loading="lazy" />
                            <div className="[@media(min-width:400px)]:hidden">
                                <span 
                                    className={`${activeThumbnail === 1? "hidden " : ""}left-3 ${chevronStyle}`}
                                    onClick={() => setActiveThumbnail(activeThumbnail - 1)}
                                >
                                    <ChevronLeft size={30} />
                                </span>
                                <span 
                                    className={`${activeThumbnail === productInfo.length? "hidden " : ""}right-3 ${chevronStyle}`}
                                    onClick={() => setActiveThumbnail(activeThumbnail + 1)}
                                >
                                    <ChevronRight size={30} />
                                </span>
                            </div>
                        </div>
                        <div className="hidden [@media(min-width:400px)]:flex gap-3 mt-5">
                            {
                                productInfo.map(({srcImg, altImg}, index) => (
                                    <div 
                                        key={srcImg}
                                        className={`${index + 1 === activeThumbnail? "border-2 border-[var(--primary)]" : ""} cursor-pointer rounded-lg overflow-hidden transition duration-300 hover:translate-y-2`}
                                        onClick={() => setActiveThumbnail(index + 1)}
                                    >
                                        <img src={srcImg} alt={altImg} loading="lazy" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
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
                </div>
            </div>
        </section>
    )
}

export default ProductInfo