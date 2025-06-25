import { Image } from "../../../../custom/img";
import { CartType } from "../../model";

type CartProps = CartType;

export default function Cart({ image, fullName, title, exp }: CartProps) {
  return (
    <div className="w-full border h-full flex flex-col items-center gap-5 p-3 shrink-0 bg-slate-200">
      <Image src={image} className="w-48 h-32 rounded-lg" />
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-red-500 font-bold text-xl">{fullName}</span>
        <small className="text-slate-900">{title}</small>
      </div>
      <p className="text-center text-slate-900">{exp}</p>
    </div>
  );
}
