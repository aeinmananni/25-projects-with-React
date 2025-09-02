import { Cart } from './components';
import { PRODUCTS_ITEMS } from '../../data';
export default function Main() {
  return (
    <div className="w-full h-full border-4 border-blue-800 overflow-y-auto grid grid-cols-3 p-2">
      {PRODUCTS_ITEMS.map(it => (
        <Cart key={it.id} {...it} />
      ))}
    </div>
  );
}
