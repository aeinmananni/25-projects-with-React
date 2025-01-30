import { ChangeEvent, useState } from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { useReactContext } from "../../context";
import { Input } from "../../custom/input";
import { Button } from "../../custom/button";
export default function Header() {
  const [input, setInput] = useState<string>("");
  const { setValue } = useReactContext();
  return (
    <head className="flex w-full h-max py-2 shadow-indigo-200 border shadow-sm justify-between items-center gap-2 p-2">
      <div className="w-full flex gap-4 items-center">
        <Button
          onClick={() => setValue(input)}
          type="button"
          className="bg-indigo-600 text-white rounded-md w-1/4 sm:w-1/6 text-sm py-1"
        >
          ارسال
        </Button>
        <Input
          value={input}
          placeholder="جستجو..."
          className="border w-full rounded-md py-1 px-1 outline-none text-sm"
          style={{ parentClassName: "w-full sm:w-1/2" }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </div>
      <MdOutlinePhotoSizeSelectActual size={50} className="text-indigo-600" />
    </head>
  );
}
