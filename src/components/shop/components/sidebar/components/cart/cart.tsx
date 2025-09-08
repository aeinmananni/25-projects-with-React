import { Button } from '../../../../../../custom/button';
import { Image } from '../../../../../../custom/img';

type CartProps = {
  image?: string;
  title?: string;
  price?: number;
  quntity?: number;
  onDelete?: () => void;
};

export default function Cart({ onDelete, image, title, price, quntity }: CartProps) {
  return (
    <div className="w-full flex  justify-between p-3 border rounded-lg shadow-md">
      <div className="flex gap-2">
        <Image
          src={image}
          alt="product-Image"
          width={60}
          height={60}
          className="rounded-md"
          badgeTitle={quntity}
          styles={{ badgeClassName: '!-bottom-1 !left-0 bg-blue-600' }}
        />
        <small>{title}</small>
      </div>
      <div className="flex gap-2 flex-col items-end">
        <small> {Number(price || 0) * Number(quntity || 0)} تومان</small>
        <Button
          onClick={onDelete}
          className=" text-white flex items-center justify-center bg-red-500 rounded-sm text-sm p-1"
        >
          حذف از سبد
        </Button>
      </div>
    </div>
  );
}
