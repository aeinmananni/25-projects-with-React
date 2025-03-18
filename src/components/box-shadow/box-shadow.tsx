import { ChangeEvent, useState } from "react";
import { Input } from "../../custom/input";
import { BoxShadowType } from "./models";
const BoxShadow = () => {
  const [boxShadowState, setBoxShadowState] = useState<BoxShadowType>({
    horizontal: 36,
    vertical: 14,
    blur: 31,
    spread: -12,
    color: "#E11D48",
  });

  return (
    <div className="flex  w-full h-full  justify-center items-center p-2 gap-12">
      <div className="w-1/2 gap-8 flex flex-col">
        <Input
          type="range"
          label="طول افقی"
          className="rangeStyle"
          min={-200}
          max={200}
          value={boxShadowState.horizontal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoxShadowState((prev) => ({
              ...prev,
              horizontal: Number(e.target.value),
            }))
          }
        />
        <Input
          type="range"
          label="طول عمودی"
          className="rangeStyle"
          min={-200}
          max={200}
          value={boxShadowState.vertical}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoxShadowState((prev) => ({
              ...prev,
              vertical: Number(e.target.value),
            }))
          }
        />
        <Input
          type="range"
          label="تاری"
          className="rangeStyle"
          min={0}
          max={100}
          value={boxShadowState.blur}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoxShadowState((prev) => ({
              ...prev,
              blur: Number(e.target.value),
            }))
          }
        />
        <Input
          type="range"
          label="گسترش رنگ"
          className="rangeStyle"
          min={-100}
          max={100}
          value={boxShadowState.spread}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoxShadowState((prev) => ({
              ...prev,
              spread: Number(e.target.value),
            }))
          }
        />
        <Input
          type="color"
          label="رنگ"
          value={boxShadowState.color}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoxShadowState((prev) => ({ ...prev, color: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          backgroundColor: boxShadowState.color,
          boxShadow: `
          ${boxShadowState.horizontal}px 
          ${boxShadowState.vertical}px 
          ${boxShadowState.blur}px 
          ${boxShadowState.spread}px 
          ${boxShadowState.color}`,
        }}
        className="w-1/2 h-1/2   text-white rounded-lg flex justify-center items-center"
      >
        <span>
          {`box-shadow: 
        ${boxShadowState.horizontal}px 
        ${boxShadowState.vertical}px 
        ${boxShadowState.blur}px 
        ${boxShadowState.spread}px 
        ${boxShadowState.color}`}
        </span>
      </div>
    </div>
  );
};

export default BoxShadow;
