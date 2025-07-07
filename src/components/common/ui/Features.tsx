import { features } from "./data";

const Features = () => {
    
    return (
        <section className="pt-15 pb-10">
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
                                    className={`inline-block text-[var(--black)] mt-4 px-4 py-1 rounded-lg`}
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