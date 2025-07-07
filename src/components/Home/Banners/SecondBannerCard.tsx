interface SecondBannerProps {
  urlImg: string;
  title: string;
  description: string;
};

const SecondBannerCard = ({ urlImg, title, description }: SecondBannerProps) => (
  <div
    className="py-20 bg-center bg-cover text-white p-5"
    style={{ backgroundImage: `url(${urlImg})` }}
  >
    <h4 className="uppercase font-bold">{title}</h4>
    <span className="font-bold text-red-500">{description}</span>
  </div>
);

export default SecondBannerCard;
