import FirstBannerCard from './FirstBannerCard';
import SecondBannerCard from './SecondBannerCard';
import { firstBanners, secondBanners } from './data';

const Banner = () => {
  return (
    <section className="pb-15">
      <div className="container">

        {/* Top Banners */}
        <div className="flex flex-col md:flex-row gap-5 mb-8">
          {firstBanners.map((banner) => (
            <FirstBannerCard key={banner.id} {...banner} />
          ))}
        </div>

        {/* Bottom Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondBanners.map((banner) => (
            <SecondBannerCard key={banner.id} {...banner} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
