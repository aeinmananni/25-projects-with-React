import { useState } from 'react';
import { useReactContext } from '../../../../../../context';
import { Radio } from '../../../../../../custom/radio';

type SortType = 'ASC' | 'DESC';
export default function Sort() {
  const { setShopItems } = useReactContext();
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC');
  return (
    <div className="flex flex-col gap-2">
      <small>مرتب سازی بر اساس :</small>
      <div className="flex gap-2">
        <Radio
          label="جدیدترین محصولات"
          checked={sort === 'ASC'}
          value={'ASC'}
          onChange={e => {
            setSort(e.target.value as SortType);
            setShopItems(prev => [...prev].sort((a, b) => a.id - b.id));
          }}
        />
        <Radio
          label="قدیمی ترین محصولات"
          checked={sort === 'DESC'}
          value={'DESC'}
          onChange={e => {
            setSort(e.target.value as SortType);
            setShopItems(prev => [...prev].sort((a, b) => b.id - a.id));
          }}
        />
      </div>
    </div>
  );
}
