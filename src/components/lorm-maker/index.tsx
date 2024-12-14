import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../../custom/button";
import Input from "../../custom/input";
import { data } from "./data";
const LormMaker = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(count);
    setCount(0);
  };

  useEffect(() => {
    setText(data);
  }, [data]);

  return (
    <div className="w-full h-full p-2 overflow-hidden flex flex-col gap-2">
      <form onSubmit={handelSubmit} className=" w-full h-max p-2">
        <div className="flex flex-col gap-5 w-full">
          <span className="text-lg text-orange-500">لورم ساز زیبا</span>
          <div className="flex w-full items-center gap-2">
            <Button
              type="submit"
              className="bg-blue-500 text-white w-1/12 rounded-md"
            >
              بساز
            </Button>
            <Input
              value={count}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCount(+e.target.value)
              }
              type="number"
              label="تعداد پاراگراف"
              name="total"
              className="border p-1 rounded-md w-full px-2 text-sm"
            />
          </div>
        </div>
      </form>
      <article className="flex flex-col gap-4 w-full h-full overflow-y-auto">
        {text.map((it, index) => (
          <p key={index}>{it}</p>
        ))}
      </article>
    </div>
  );
};

export default LormMaker;
