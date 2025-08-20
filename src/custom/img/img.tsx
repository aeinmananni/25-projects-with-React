import { ImgHTMLAttributes } from 'react';

type Styles = {
  parentClassName?: string;
  badgeClassName?: string;
};

type ImageProps = {
  badgeTitle?: number;
  styles?: Styles;
} & ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ styles, ...props }: ImageProps) => {
  return (
    <div className={`relative h-max w-max ${styles?.parentClassName}`}>
      {props.badgeTitle && (
        <div
          className={`  bg-rose-700 absolute rounded-full z-10 w-4 h-4  flex justify-center items-center text-white text-xs ${
            styles?.badgeClassName || 'left-2 top-1'
          }`}
        >
          {props.badgeTitle}
        </div>
      )}
      <img {...props} />
    </div>
  );
};

export default Image;
