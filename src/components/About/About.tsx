import Banner from "@/components/common/ui/Banner";
import Features from "@/components/common/ui/Features";
import AboutInfo from "@/components/About/AboutInfo";
import DownloadApp from "@/components/About/DownloadApp";
import NewsLetter from "@/components/common/ui/NewsLetter";
import bannerImg from '@/assets/about/banner.png';

const About = () => {
    return (
        <>
            <Banner urlImg={bannerImg} title="#KnowUs" description="Lorem ipsum dolar sit amel, consectetur" />
            <AboutInfo />
            <DownloadApp />
            <Features />
            <div className="mt-15">
                <NewsLetter />
            </div>
        </>
    )
}

export default About;