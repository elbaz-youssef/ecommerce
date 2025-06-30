import Arrivals from "../components/features/home/Arrivals"
import Banner from "../components/features/home/Banner"
import CallToAction from "../components/features/home/CallToAction"
import FeaturedProducts from "../components/features/home/FeaturedProducts"
import Features from "../components/common/Features"
import Hero from "../components/features/home/Hero"
import NewsLetter from "../components/layout/NewsLetter"

const Home = () => {
  return (
    <>
        <Hero />
        <Features />
        <FeaturedProducts />
        <CallToAction />
        <Arrivals />
        <Banner />
        <NewsLetter />
    </>
  )
}

export default Home