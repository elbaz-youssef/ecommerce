import Button from "@/components/common/ui/Button";

interface FirstBannerProps {
  urlImg: string;
  title: string;
  offer: string;
  description: string;
  btnContent: string;
};

const FirstBannerCard = ({
  urlImg,
  title,
  offer,
  description,
  btnContent,
}: FirstBannerProps) => (
  <div
    className="group w-full md:w-1/2 py-30 bg-center bg-cover text-white p-5"
    style={{ backgroundImage: `url(${urlImg})` }}
  >
    <span>{title}</span>
    <h4 className="font-bold capitalize">{offer}</h4>
    <span>{description}</span>
    <div className="mt-4">
      <Button variant="secondary">{btnContent}</Button>
    </div>
  </div>
);

export default FirstBannerCard;
