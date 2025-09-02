import { Button } from '../../../../../../custom/button';

type CartProps = {
  image: string;
  title: string;
  price: number;
  quntity: number;
};

export default function Cart({ image, title, price, quntity: quantity }: CartProps) {
  return (
    <div className="flex flex-col items-center border border-slate-500  h-max rounded-lg overflow-hidden p-2">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-72 relative overflow-hidden bg-cover bg-center rounded-md bg-slate-300"
      />
      <div className="flex items-center justify-between w-full p-1">
        <h1 className=" flex items-center italic truncate  w-1/2">موبایل {title}</h1>
        <small>{`موجودی : ${quantity ?? 0}`} </small>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-slate-500/10 via-slate-500 to-slate-500/10" />
      <div className="w-full flex items-center justify-between py-3">
        <Button className="bg-slate-900 p-2 text-sm">افزودن به سبد خرید</Button>
        <span>{price} تومان</span>
      </div>
    </div>
  );
}
