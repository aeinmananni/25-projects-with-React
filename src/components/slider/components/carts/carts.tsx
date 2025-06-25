import { CART_ITEMS } from "../../data";
import { Cart } from "../cart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const arrow = "text-slate-800 cursor-pointer";
export default function Carts() {
  return (
    <div className="w-1/2  border rounded-lg overflow-hidden  flex relative">
      {CART_ITEMS.map((it, index) => (
        <Cart key={index} {...it} />
      ))}
      <div className="w-full absolute top-1/2  flex justify-between items-center">
        <IoIosArrowForward className={arrow} size={30} />
        <IoIosArrowBack className={arrow} size={30} />
      </div>
    </div>
  );
}
