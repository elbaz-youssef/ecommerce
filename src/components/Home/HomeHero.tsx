import { Link } from "react-router-dom"
import Button from "@/components/common/ui/Button";

const Hero = () => {
  return (
    <section 
        className={`relative bg-[var(--lightPurple)] bg-top bg-cover h-[calc(100vh-64px)] w-full sm:bg-[url('/src/assets/img1.jpg')]`}
    >
        <div className="container">
            <div className="flex justify-center items-center h-[calc(100vh-64px)] text-center sm:text-left sm:justify-start">
                 <div>
                    <span className="text-lg font-medium">Trade-in-offer</span>
                    <h1>Super value deals 
                        <br />
                        <span className="text-[var(--primary)]">On all products</span>
                    </h1>
                    <p>Save more with coupons & up to 70% off!</p>
                    <Link to="/shop">
                      <Button>Shop Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero