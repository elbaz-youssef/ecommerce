import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import productImg1  from '@/assets/products/f1.jpg';
import productImg2  from '@/assets/products/f2.jpg';
import productImg3  from '@/assets/products/f3.jpg';
import productImg4  from '@/assets/products/f4.jpg';

import { productInfo } from "./data";

const chevronStyle = "absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--black)] text-white flex justify-center items-center transition duration-300 ease-in-out cursor-pointer hover:bg-[var(--primary)]";

const ProductImgs = () => {
    const [activeThumbnail, setActiveThumbnail] = useState(1);
    const [activeSrcImg, setActiveSrcImg] = useState(productImg1);

    useEffect(() => {
        switch(activeThumbnail) {
            case 1:
                setActiveSrcImg(productImg1);
                break;
            case 2:
                setActiveSrcImg(productImg2);
                break;
            case 3:
                setActiveSrcImg(productImg3);
                break;
            case 4:
                setActiveSrcImg(productImg4);
                break;
            default:
                setActiveSrcImg(productImg1);
        }
    }, [activeThumbnail]);

    return (
        <div>
                        
            {/* Active Current Product Img */}
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

            {/* Product Thumbnail Imgages */}
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
    )
}

export default ProductImgs;