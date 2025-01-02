import { ImgHTMLAttributes } from "react";

type ImageProps = { badgeTitle?: number } & ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ ...props }: ImageProps) => {
  return (
    <div className="relative h-max w-max">
      <div className="bg-rose-700 absolute rounded-full z-10 w-4 h-4 left-2 top-1 flex justify-center items-center text-white text-xs">
        {props.badgeTitle}
      </div>
      <img {...props} />
    </div>
  );
};

export default Image;