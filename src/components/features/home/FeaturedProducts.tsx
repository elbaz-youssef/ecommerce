
import type { ProductType } from '../../../types/common/product.types';
import Product from '../../common/Product';

import img1  from '@/assets/products/f1.jpg';
import img2  from '@/assets/products/f2.jpg';
import img3  from '@/assets/products/f3.jpg';
import img4  from '@/assets/products/f4.jpg';
import img5  from '@/assets/products/f5.jpg';
import img6  from '@/assets/products/f6.jpg';
import img7  from '@/assets/products/f7.jpg';
import img8  from '@/assets/products/f8.jpg';

const FeaturedProducts = () => {
    const featuredProducts: ProductType[] = [
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
        },
        {
            srcImg: img5,
            altImg: 'product5',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img6,
            altImg: 'product6',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img7,
            altImg: 'product7',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
        {
            srcImg: img8,
            altImg: 'product8',
            mark: 'adidas',
            title: 'Cartoon Astronaut T-Shirts',
            stars: 5,
            price: '$78'
        },
    ];

    return (
        <section className="pt-20 pb-30">
            <div className="container">
                <div className="text-center">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Modern Design</p>
                </div>
                <div className="flex justify-center gap-8 flex-wrap mt-10">
                    {
                        featuredProducts.map(({srcImg, altImg, mark, title, stars, price}) => (
                            <Product 
                                key={srcImg}
                                srcImg={srcImg} 
                                altImg={altImg} 
                                mark={mark} 
                                title={title}
                                stars={stars}
                                price={price}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts