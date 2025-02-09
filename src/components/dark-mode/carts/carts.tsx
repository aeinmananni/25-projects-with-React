import { carts } from "../data";
import { Cart } from "./cart";
const Carts = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full border border-sky-900 p-2">
      <div className="flex flex-col gap-3 justify-center items-center">
        <span className="text-lg">لایت مود فعال شده وفضا روشنه</span>
        <span className="text-sm">این لایت موده و الان صفحه سفیده</span>
      </div>
      <div className="w-full h-full flex justify-center items-center gap-3">
        {carts.map((it, index) => (
          <Cart key={index} title={it.title} exp={it.exp} src={it.src} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
