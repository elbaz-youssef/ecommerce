import Banner from "@/components/common/ui/Banner";
import bannerImg from '@/assets/about/banner.png';
import NewsLetter from "@/components/common/ui/NewsLetter";
import Location from "@/components/Contact/Location";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
    return (
        <>
            <Banner urlImg={bannerImg} title="#let's talk" description="Leave a Message, We love to hear from you!" />
            <Location />
            <ContactForm />
            <NewsLetter />
        </>
    )
}

export default Contact;