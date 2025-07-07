import { Link } from "react-router-dom";

interface PostProps {
    numberImg: string;
    srcImg: string;
    title: string;
    description: string;
    link: string;
}

const Post = ({
  numberImg,
  srcImg,
  title,
  description,
  link,
}: PostProps) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 sm:items-center bg-white"
    >
      <div 
        className={`relative h-75 sm:h-100 bg-center bg-cover`}
        style={{ backgroundImage: `url(${srcImg})` }}
        >
        <span className="absolute top-0 left-0 -translate-y-[60%] font-bold text-gray-300 text-[3rem] sm:text-[6rem] z-[-1]">
          {numberImg}
        </span>
      </div>
      <div>
        <h3>{title}</h3>
        <p className="mb-8">{description}</p>
        <Link to="/" className="underline transition duration-300 hover:no-underline hover:text-[var(--primary)]">{link}</Link>
      </div>
    </div>
  );
};

export default Post;
