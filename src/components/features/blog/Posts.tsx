
import type { PostType } from '../../../types/blog/post.types'
import Post from './Post'

const Posts = () => {
    const posts: PostType[] = [
        {
            numberImg: '13/01',
            srcImg: 'src/assets/blog/b1.jpg',
            title: 'The Cotton-Jersey Zip-Up Hoodie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci quis officia molestiae ad, dicta quisquam fugit eaque repudiandae illo fuga praesentium. Quibusdam error laboriosam unde nobis natus magnam? Quae.',
            link: 'Continue Reading'
        },
        {
            numberImg: '13/04',
            srcImg: 'src/assets/blog/b2.jpg',
            title: 'How To Style a Quiff',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci quis officia molestiae ad, dicta quisquam fugit eaque repudiandae illo fuga praesentium. Quibusdam error laboriosam unde nobis natus magnam? Quae.',
            link: 'Continue Reading'
        },
        {
            numberImg: '12/01',
            srcImg: 'src/assets/blog/b3.jpg',
            title: 'Must-Have Skater Girl Items',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci quis officia molestiae ad, dicta quisquam fugit eaque repudiandae illo fuga praesentium. Quibusdam error laboriosam unde nobis natus magnam? Quae.',
            link: 'Continue Reading'
        },
        {
            numberImg: '16/01',
            srcImg: 'src/assets/blog/b4.jpg',
            title: 'Runway Inspired Trends',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci quis officia molestiae ad, dicta quisquam fugit eaque repudiandae illo fuga praesentium. Quibusdam error laboriosam unde nobis natus magnam? Quae.',
            link: 'Continue Reading'
        },
        {
            numberImg: '10/03',
            srcImg: 'src/assets/blog/b6.jpg',
            title: 'AW20 Menswear Trends',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci quis officia molestiae ad, dicta quisquam fugit eaque repudiandae illo fuga praesentium. Quibusdam error laboriosam unde nobis natus magnam? Quae.',
            link: 'Continue Reading'
        }
    ]
    return (
        <section className="pt-30 pb-15">
            <div className="container">
                <div className="flex flex-col gap-30">
                    {
                        posts.map(({numberImg, srcImg, title, description, link}) => (
                            <Post
                                numberImg={numberImg}
                                srcImg={srcImg}
                                title={title}
                                description={description}
                                link={link}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Posts