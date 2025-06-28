import img from '@/assets/banner/b2.jpg';

const CallToAction = () => {
  return (
    <section 
        className="py-15 bg-center bg-cover"
        style={{backgroundImage: `url(${img})`}}
    >
        <div className="container">
            <div className="flex justify-center items-center text-center text-white">
                <div className="flex flex-col gap-3">
                    <h4>Repair Services</h4>
                    <h3 className="font-bold text-[2rem]">Up to <span className="text-red-500">70% Off</span> - All t-Shirts & accessories</h3>
                    <div>
                        <button className="w-fit bg-white text-[var(--black)] py-2 px-4 rounded-lg">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction