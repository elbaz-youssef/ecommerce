import Arrivals from "@/components/Home/Arrivals";
import Banner from "@/components/Home/Banners/Banner";
import CallToAction from "@/components/Home/CallToAction";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Features from "@/components/common/ui/Features";
import Hero from "@/components/Home/HomeHero";
import NewsLetter from "@/components/common/ui/NewsLetter";

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