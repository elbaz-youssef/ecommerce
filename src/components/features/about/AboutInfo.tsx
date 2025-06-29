import img1  from '@/assets/about/a6.jpg';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
  return (
    <section className="my-15">
        <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-center gap-10">
                <div className="rounded-2xl overflow-hidden">
                    <img src={img1} alt="about image" loading="lazy" />
                </div>
                <div>
                    <h3>Who we Are?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nulla necessitatibus asperiores nemo blanditiis mollitia, hic, in sapiente voluptate dolorem optio. Quae dolores aspernatur, placeat magni consequuntur ipsam odio.</p>
                    <Link to="#" className="underline transition duration-300 hover:no-underline hover:text-[var(--primary)]">Learn more</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutInfo