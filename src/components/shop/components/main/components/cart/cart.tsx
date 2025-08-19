import { Button } from '../../../../../../custom/button';
import { Image } from '../../../../../../custom/img';
import iphoneImage1 from './../../images/iphone-image1.jpg';
export default function Cart() {
  return (
    <div className="flex flex-col items-center border border-slate-500 w-max h-max rounded-lg overflow-hidden p-2">
      <Image src={iphoneImage1} alt="iphoneImage" width={260} height={220} />
      <h1 className="w-full flex items-center italic border-b border-slate-400 h-10">
        موبایل ایفون
      </h1>
      <div className="w-full flex items-center justify-between py-3">
        <Button className="bg-slate-900 p-2 text-sm">افزودن به سبد خرید</Button>
        <span>34,000,000 تومان</span>
      </div>
    </div>
  );
}
