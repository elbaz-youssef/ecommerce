import Banner from "../components/common/Banner"
import Features from "../components/common/Features"
import AboutInfo from "../components/features/about/AboutInfo"
import DownloadApp from "../components/features/about/DownloadApp"
import NewsLetter from "../components/layout/NewsLetter"
import img from '@/assets/about/banner.png'

const About = () => {
    return (
      <>
        <Banner urlImg={img} title="#KnowUs" description="Lorem ipsum dolar sit amel, consectetur" />
        <AboutInfo />
        <DownloadApp />
        <Features />
        <div className="mt-15">
          <NewsLetter />
        </div>
      </>
    )
}

export default About