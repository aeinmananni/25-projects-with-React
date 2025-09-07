import { useReactContext } from '../../../../../../context';
import { Select } from '../../../../../../custom/select';
import { BRANDS_ITEMS, PRODUCTS_ITEMS } from '../../../../data';

export default function Selects() {
  const { setShopItems } = useReactContext();
  return (
    <div className="flex flex-col w-1/3 gap-2">
      <small>برندها</small>
      <Select
        options={BRANDS_ITEMS}
        className="w-full"
        onChange={e => {
          if (e.target.value === 'All') {
            setShopItems(PRODUCTS_ITEMS);
          } else {
            setShopItems(PRODUCTS_ITEMS.filter(it => it.availableBrand === e.target.value));
          }
        }}
      />
    </div>
  );
}
