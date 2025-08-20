import { Button } from '../../../../../../custom/button';
import { Image } from '../../../../../../custom/img';
import image from './../../../main/images/iphone-image1.jpg';
export default function Cart() {
  return (
    <div className="w-full flex  justify-between p-3 border rounded-lg shadow-md">
      <div className="flex gap-2">
        <Image
          src={image}
          alt="product-Image"
          width={60}
          height={60}
          className="rounded-md"
          badgeTitle={2}
          styles={{ badgeClassName: '!-bottom-1 !left-0 bg-blue-600' }}
        />
        <small>موبایل ال جی</small>
      </div>
      <div className="flex gap-2 flex-col items-end">
        <small> 36,000,000 تومان</small>
        <Button className=" text-white flex items-center justify-center bg-red-500 rounded-sm text-sm p-1">
          حذف از سبد
        </Button>
      </div>
    </div>
  );
}
