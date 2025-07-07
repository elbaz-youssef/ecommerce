import Banner from "@/components/common/ui/Banner";
import Posts from "@/components/Blog/Posts";
import NewsLetter from "@/components/common/ui/NewsLetter";
import bannerImg from '@/assets/banner/b19.jpg';

const Blog = () => {
  return (
    <>
        <Banner urlImg={bannerImg} title="#readmore" description="Read all case studies about our products!" />
        <Posts />
        <NewsLetter />
    </>
  )
}

export default Blog