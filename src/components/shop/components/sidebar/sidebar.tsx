import { useReactContext } from '../../../../context';
import { ProductsType } from '../../models';
import { Cart } from './components';
import { formatCurrent } from '../../utils';
export default function Sidebar() {
  const { buyItems, setBuyItems } = useReactContext();

  const handelRemoveItems = (product: ProductsType) => {
    setBuyItems(prev => {
      const existItem = prev.find(it => it.id === product.id);

      if (existItem?.quntity === 1) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return prev.map(item =>
          item.id === product.id ? { ...item, quntity: item.quntity - 1 } : item
        );
      }
    });
  };

  const totalPrice = buyItems.reduce((sum, item) => {
    return sum + item.price * item.quntity;
  }, 0);

  const formatPrice = formatCurrent(totalPrice);
  return (
    <div className="flex w-1/3 h-full flex-col ">
      <div className="w-full flex flex-col gap-3 h-full border-4 border-pink-500 p-1.5 overflow-y-auto relative">
        {buyItems.length > 0 ? (
          <>
            {buyItems.map(it => (
              <Cart {...it} onDelete={() => handelRemoveItems(it)} />
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center text-red-500 font-semibold">
            {'سبد خرید خالی است'}
          </div>
        )}
      </div>
      <div className=" bottom-0  h-1/5 flex border w-full items-center justify-center flex-col gap-2">
        <span>{' مجموع کله قیمت'}</span>
        <span>{`${formatPrice}`}</span>
      </div>
    </div>
  );
}
