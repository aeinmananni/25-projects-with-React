import { Image } from "../../custom/img";

type Props = {
  title: string;
  price: string;
  image: string;
  exp: string;
};

const Card = ({ title, exp, image, price }: Props) => {
  return (
    <div className="w-1/5  rounded-md p-2  overflow-hidden shadow-lg shadow-slate-100">
      <div className="w-full h-full flex flex-col gap-3">
        <Image
          src={image}
          styles={{ parentClassName: "!w-full" }}
          className="rounded-md"
        />
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
