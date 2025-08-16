import { Radio } from '../../../../../../custom/radio';

export default function Sort() {
  return (
    <div className="flex flex-col gap-2">
      <small>مرتب سازی بر اساس :</small>
      <div className="flex gap-2">
        <Radio label="جدیدترین محصولات" checked />
        <Radio label="قدیمی ترین محصولات" />
      </div>
    </div>
  );
}
