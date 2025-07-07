
import Product from '@/components/common/ui/Product';
import { featuredProducts } from './data';

const FeaturedProducts = () => {
    
    return (
        <section className="pt-15 pb-25">
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