import { Cart } from './components';

export default function Sidebar() {
  return (
    <div className="w-1/3 flex flex-col gap-3 h-full border-4 border-pink-500 p-1.5 overflow-y-auto">
      <Cart />
    </div>
  );
}
