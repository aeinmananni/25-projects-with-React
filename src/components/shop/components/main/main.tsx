import { Cart } from './components';

export default function Main() {
  return (
    <div className="w-full h-full border-4 border-blue-800 overflow-y-auto grid grid-cols-3 p-2">
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  );
}
