import { useReactContext } from '../../../../context';

import { Sort, Selects } from './components';
export default function Header() {
  const { shopItems } = useReactContext();
  return (
    <div className="w-full h-1/6 border-2 border-orange-500 flex justify-between items-center p-3">
      <div className="h-full flex items-center gap-3">
        <h1 className="font-bold text-slate-300 bg-purple-600 w-16 h-16 flex justify-center items-center rounded-full">
          Shop
        </h1>
        <span className="text-sm"> تعداد محصول : {shopItems.length}</span>
      </div>
      <Sort />
      <Selects />
    </div>
  );
}
