import MainButton from "../../common/buttons/MainButton"

const Hero = () => {
  return (
    <section 
        className={`relative bg-[var(--lightPurple)] bg-center bg-cover h-[calc(100vh-64px)] w-full sm:bg-[url('/src/assets/img1.jpg')]`}
    >
        <div className="container">
            <div className="flex justify-center items-center h-[calc(100vh-64px)] text-center sm:text-left sm:justify-start">
                 <div>
                    <h4>Trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h2 className="text-[var(--primary)]">On all products</h2>
                    <p>Save more with coupons & up to 70% off!</p>
                    <MainButton roundedLeft={1}>Shop Now</MainButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero