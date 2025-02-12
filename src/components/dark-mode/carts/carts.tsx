import { carts } from "../data";
import { Cart } from "./cart";
import { useReactContext } from "../../../context";
const Carts = () => {
  const { darkMode } = useReactContext();
  return (
    <div
      className={`flex flex-col gap-2 w-full h-full duration-300 ${
        darkMode
          ? "border-slate-200 bg-sky-900"
          : "border-sky-900 bg-transparent"
      } border  p-2`}
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <span
          className={`text-lg font-bold ${
            darkMode ? "text-slate-300" : "text-slate-900"
          }`}
        >{`${
          darkMode
            ? "دارک مود فعال شده و الان صفحه تاریکه"
            : "لایت مود فعال شده وفضا روشنه"
        }`}</span>
        <span
          className={`text-sm ${
            darkMode ? "text-slate-300" : "text-slate-900"
          }`}
        >{`${
          darkMode
            ? "این دارک موده و الان صفحه تیرست"
            : "این لایت موده و صفحه روشنه"
        }`}</span>
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
