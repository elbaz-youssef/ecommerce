import Product from '@/components/common/ui/Product';
import Pagination from '@/components/common/ui/Pagination';

import { products } from './data';

const Products = () => {

    return (
        <section className="pt-25 pb-15">
            <div className="container">
                <div className="flex justify-center gap-8 flex-wrap">
                    {
                        products.map(({srcImg, altImg, mark, title, stars, price}) => (
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
                <Pagination />
            </div>
        </section>
    )
}

export default Products