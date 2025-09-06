import { Cart } from './components';

export default function Sidebar() {
  return (
    <div className="flex w-1/3 h-full flex-col ">
      <div className="w-full flex flex-col gap-3 h-full border-4 border-pink-500 p-1.5 overflow-y-auto relative">
        <Cart />
      </div>
      <div className=" bottom-0  h-1/5 flex border w-full items-center justify-center flex-col gap-2">
        <span>{' مجموع کله قیمت'}</span>
        <span>{'43200000تومان'}</span>
      </div>
    </div>
  );
}
