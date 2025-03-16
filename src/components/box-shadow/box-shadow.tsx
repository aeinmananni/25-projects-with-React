import { Input } from "../../custom/input";

const BoxShadow = () => {
  return (
    <div className="flex  w-full h-full  justify-center items-center p-2 gap-12">
      <div className="w-1/2 gap-8 flex flex-col">
        <Input
          type="range"
          label="طول افقی"
          className="rangeStyle"
          min={-200}
          max={200}
        />
        <Input
          type="range"
          label="طول عمودی"
          className="rangeStyle"
          min={-200}
          max={200}
        />
        <Input
          type="range"
          label="تاری"
          className="rangeStyle"
          min={0}
          max={100}
        />
        <Input
          type="range"
          label="گسترش رنگ"
          className="rangeStyle"
          min={-100}
          max={100}
        />
        <Input type="color" label="رنگ" />
      </div>
      <div className="w-1/2 h-1/2  bg-rose-600 text-white rounded-lg flex justify-center items-center">
        <span>{`box-shadow: 10px  10px  10px    10px  rgba(0, 0, 0, 0.5)`}</span>
      </div>
    </div>
  );
};

export default BoxShadow;
