
import Post from './Post';
import Pagination from '@/components/common/ui/Pagination';

import { posts } from './data';

const Posts = () => {
    
    return (
        <section className="pt-25 pb-15">
            <div className="container">
                <div className="flex flex-col gap-30">
                    {
                        posts.map(({numberImg, srcImg, title, description, link}) => (
                            <Post
                                key={srcImg}
                                numberImg={numberImg}
                                srcImg={srcImg}
                                title={title}
                                description={description}
                                link={link}
                            />
                        ))
                    }
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default Posts;