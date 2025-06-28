import type { Feature } from '../../../types/home/feature.types';

import img1 from '@/assets/features/f1.png';
import img2 from '@/assets/features/f2.png';
import img3 from '@/assets/features/f3.png';
import img4 from '@/assets/features/f4.png';
import img5 from '@/assets/features/f5.png';
import img6 from '@/assets/features/f6.png';

const Features = () => {
    const features: Feature[]  = [
        {
            src: img1,
            alt: "feature1 image",
            content: "Free Shipping",
            bgColor: `#dbf4f670`,
        },
        {
            src: img2,
            alt: "feature2 image",
            content: "Online Order",
            bgColor: `#e78dc125`,
        },
        {
            src: img3,
            alt: "feature3 image",
            content: "Save Money",
            bgColor: `#eaf5d870`,
        },
        {
            src: img4,
            alt: "feature4 image",
            content: "Promotions",
            bgColor: `#89bfe125`,
        },
        {
            src: img5,
            alt: "feature5 image",
            content: "Happy Sell",
            bgColor: `#a18ed825`,
        },
        {
            src: img6,
            alt: "feature6 image",
            content: "F24/7 Support",
            bgColor: `#e7ad8d25`,
        }
    ]
  return (
    <section className="py-10">
        <div className="container">
            <div className="flex justify-center gap-5 flex-wrap">
                {
                    features.map(({src, alt, content, bgColor}) => (
                        <div 
                            key={src}
                            className="text-center border border-gray-200 px-4 py-8 rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-lg"
                        >
                            <img src={src} alt={alt} loading='lazy' />
                            <span 
                                className={`inline-block text-[var(--primary)] mt-4 px-4 py-1 rounded-lg`}
                                style={{backgroundColor: bgColor}}
                            >
                                {content}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Features