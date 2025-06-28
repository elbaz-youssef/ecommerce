import banner1 from '@/assets/banner/b17.jpg'
import banner2 from '@/assets/banner/b10.jpg'
import banner3 from '@/assets/banner/b7.jpg'
import banner4 from '@/assets/banner/b4.jpg'
import banner5 from '@/assets/banner/b18.jpg'

const Banner = () => {
    const firstBanners = [
        {
            id: 1,
            urlImg: banner1,
            title: "crazy deals",
            offer: "buy 1 get 1 free",
            description: "The best classic dress is on sale at cara",
            btnContent: "Learn more"
        },
        {
            id: 2,
            urlImg: banner2,
            title: "spring/summer",
            offer: "upcomming season",
            description: "The best classic dress is on sale at cara",
            btnContent: "Collection"
        },
    ];
    const secondBanners = [
        {
            id: 1,
            urlImg: banner3,
            title: "seasonal sale",
            description: "Winter Collection - 50% Off"
        },
        {
            id: 2,
            urlImg: banner4,
            title: "new footwear collection",
            description: "Spring/Summer 2025"
        },
        {
            id: 3,
            urlImg: banner5,
            title: "t-shirts",
            description: "New T-shirts"
        }
    ]
    return (
        <section className="pb-15 ">
            <div className="container">
                <div>
                    <div className="flex flex-col md:flex-row gap-5 mb-8">
                        {
                            firstBanners.map(({id, urlImg, title, offer, description, btnContent}) => (
                                <div 
                                    key={id}
                                    className="group w-full md:w-1/2 py-30 bg-center bg-cover text-white p-5"
                                    style={{backgroundImage: `url(${urlImg}`}}
                                >
                                    <span>{title}</span>
                                    <h4 className="font-bold">{offer}</h4>
                                    <span>{description}</span>
                                    <div className="mt-4">
                                        <button className="py-2 px-4 border-2 border-white cursor-pointer transition duration-300 ease-in-out group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)]">{btnContent}</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            secondBanners.map(({id, urlImg, title, description}) => (
                                <div 
                                    key={id}
                                    className="py-20 bg-center bg-cover text-white p-5"
                                    style={{backgroundImage: `url(${urlImg}`}}
                                >
                                    <h3 className="uppercase font-bold text-[2rem]">{title}</h3>
                                    <span className="font-bold text-red-500">{description}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner