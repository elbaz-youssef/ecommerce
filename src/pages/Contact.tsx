import Banner from "../components/common/Banner"
import img from '@/assets/about/banner.png'
import NewsLetter from "../components/features/home/NewsLetter"


const Contact = () => {
  return (
    <>
      <Banner urlImg={img} title="#let's talk" description="Leave a Message, We love to hear from you!" />
      <NewsLetter />
    </>
  )
}

export default Contact