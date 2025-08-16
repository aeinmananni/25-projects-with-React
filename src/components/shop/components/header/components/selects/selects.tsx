import { Select } from '../../../../../../custom/select';
import { BRANDS_ITEMS } from '../../../../data';

export default function Selects() {
  return (
    <div className="flex flex-col w-1/3 gap-2">
      <small>برندها</small>
      <Select options={BRANDS_ITEMS} className="w-full" />
    </div>
  );
}
