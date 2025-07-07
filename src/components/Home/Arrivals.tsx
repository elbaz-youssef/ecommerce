import Product from "../common/ui/Product";
import { arrivalProducts } from "./data";

const Arrivals = () => {
    
    
    return (
        <section className="py-25">
            <div className="container">
                <div className="text-center">
                    <h2>New Arrivals</h2>
                    <p>Summer Collection New Modern Design</p>
                </div>
                <div className="flex justify-center gap-8 flex-wrap mt-10">
                    {
                        arrivalProducts.map(({srcImg, altImg, mark, title, stars, price}) => (
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

export default Arrivals