import Banner from "../components/common/Banner"
import Pagination from "../components/common/Pagination"
import Posts from "../components/features/blog/Posts"
import NewsLetter from "../components/features/home/NewsLetter"
import img from '@/assets/banner/b19.jpg'

const Blog = () => {
    return (
        <>
          <Banner urlImg={img} title="#readmore" description="Read all case studies about our products!" />
          <Posts />
          <Pagination />
          <NewsLetter />
        </>
    )
}

export default Blog