import { Cart } from './components';
import { PRODUCTS_ITEMS } from '../../data';
import { useReactContext } from '../../../../context';
import { useEffect } from 'react';
export default function Main() {
  const { setShopItems, shopItems } = useReactContext();

  useEffect(() => {
    setShopItems(PRODUCTS_ITEMS);
  }, [setShopItems]);
  return (
    <div className="w-full h-full border-4 border-blue-800 overflow-y-auto grid grid-cols-3 p-2">
      {shopItems.map(it => (
        <Cart key={it.id} {...it} />
      ))}
    </div>
  );
}
