import Banner from "../components/common/Banner"
import img from '@/assets/about/banner.png'
import NewsLetter from "../components/layout/NewsLetter"
import Location from "../components/features/contact/Location"
import ContactForm from "../components/features/contact/ContactForm"


const Contact = () => {
  return (
    <>
      <Banner urlImg={img} title="#let's talk" description="Leave a Message, We love to hear from you!" />
      <Location />
      <ContactForm />
      <NewsLetter />
    </>
  )
}

export default Contact