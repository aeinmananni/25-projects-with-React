import { useEffect, useState } from 'react';
import { CART_ITEMS } from '../../data';
import { Cart } from '../cart';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const arrow = 'text-slate-800 cursor-pointer';
export default function Carts() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === CART_ITEMS.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-1/2   rounded-lg overflow-hidden  flex relative">
      {CART_ITEMS.map((it, i) => (
        <Cart key={i} {...it} style={{ transform: `translateX(${index * 100}%)` }} />
      ))}

      <div className="w-full absolute top-1/2  flex justify-between items-center">
        <IoIosArrowForward
          className={arrow}
          size={30}
          onClick={() => setIndex(prev => (prev === CART_ITEMS.length - 1 ? 0 : prev + 1))}
        />
        <IoIosArrowBack
          className={arrow}
          size={30}
          onClick={() => setIndex(prev => (prev === 0 ? CART_ITEMS.length - 1 : prev - 1))}
        />
      </div>
    </div>
  );
}
