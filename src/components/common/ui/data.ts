import type { FeatureType } from '@/types/feature.types';

import img1 from '@/assets/features/f1.png';
import img2 from '@/assets/features/f2.png';
import img3 from '@/assets/features/f3.png';
import img4 from '@/assets/features/f4.png';
import img5 from '@/assets/features/f5.png';
import img6 from '@/assets/features/f6.png';

export const features: FeatureType[]  = [
    {
        src: img1,
        alt: "feature1 image",
        content: "Free Shipping",
        bgColor: `#dbf4f6`,
    },
    {
        src: img2,
        alt: "feature2 image",
        content: "Online Order",
        bgColor: `#d88db1`,
    },
    {
        src: img3,
        alt: "feature3 image",
        content: "Save Money",
        bgColor: `#eaf5d8`,
    },
    {
        src: img4,
        alt: "feature4 image",
        content: "Promotions",
        bgColor: `#89bfe1`,
    },
    {
        src: img5,
        alt: "feature5 image",
        content: "Happy Sell",
        bgColor: `#a18ed8`,
    },
    {
        src: img6,
        alt: "feature6 image",
        content: "F24/7 Support",
        bgColor: `#e7ad8d`,
    }
]

export const totalItems = [
    {
        id: 1,
        title: "Subtotal",
        price: "$175.00"
    },
    {
        id: 2,
        title: "Shipping",
        price: "Free"
    },
    {
        id: 3,
        title: "Total",
        price: "$175.00"
    }
]