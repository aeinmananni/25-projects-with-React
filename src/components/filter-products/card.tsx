import { Image } from "../../custom/img";

type Props = {
  title: string;
  price: string;
  image: string;
  category: string;
  exp: string;
};

const Card = ({ title, exp, image, price, category }: Props) => {
  return (
    <div className="w-full  rounded-md p-2  overflow-hidden shadow-md shadow-slate-100">
      <div className="w-full h-full flex flex-col justify-between gap-3 relative">
        <Image
          src={image}
          styles={{ parentClassName: "!w-44" }}
          className="rounded-md border"
        />
        <span className="top-1/3 left-0 absolute  font-bold text-lg">
          {category}
        </span>
        <div className="flex justify-between">
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <span>{exp}</span>
      </div>
    </div>
  );
};

export default Card;
