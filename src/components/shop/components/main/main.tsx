import { Cart } from './components';
import { PRODUCTS_ITEMS } from '../../data';
import { useReactContext } from '../../../../context';
import { useEffect } from 'react';
import { ProductsType } from '../../models';
export default function Main() {
  const { setShopItems, shopItems, setBuyItems } = useReactContext();

  useEffect(() => {
    setShopItems(PRODUCTS_ITEMS);
  }, [setShopItems]);

  const addBuyItems = (product: ProductsType) => {
    setBuyItems(prev => {
      const existItem = prev.find(it => it.id === product.id);
      if (existItem) {
        return prev.map(item => {
          return item.id === product.id ? { ...item, quntity: item.quntity + 1 } : item;
        });
      } else {
        return [...prev, { ...product, quntity: 1 }];
      }
    });
  };
  return (
    <div className="w-full h-full border-4 border-blue-800 overflow-y-auto grid grid-cols-3 p-2">
      {shopItems.map(it => (
        <Cart key={it.id} {...it} onClick={() => addBuyItems(it)} />
      ))}
    </div>
  );
}
