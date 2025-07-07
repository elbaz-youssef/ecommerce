import img from '@/assets/banner/b2.jpg';
import Button from "@/components/common/ui/Button";

const CallToAction = () => {
  return (
    <section 
        className="py-15 bg-center bg-cover"
        style={{backgroundImage: `url(${img})`}}
    >
        <div className="container">
            <div className="flex justify-center items-center text-center text-white">
                <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">Repair Services</span>
                    <h3 className="font-bold text-[2rem]">Up to <span className="text-red-500">70% Off</span> - All t-Shirts & accessories</h3>
                    <div>
                        <Button>Explore More</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction