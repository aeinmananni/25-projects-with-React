import { Input } from "../../../../custom/input";
import { Button } from "../../../../custom/button";
import { useReactContext } from "../../../../context";
import { ChangeEvent, useState } from "react";
export default function AddTodo() {
  const { setTasks } = useReactContext();
  const [value, setValue] = useState<string>("");
  return (
    <div className="w-full flex flex-row-reverse items-center gap-2">
      <Input
        value={value}
        className="py-1 px-2 rounded-md"
        styles={{ parentClassName: "w-full" }}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button
        onClick={() => {
          if (value) {
            setTasks((prev) => [
              ...prev,
              { id: prev.length + 1, title: value, isCompleted: false },
            ]);
            setValue("");
          }
        }}
        className="p-1 rounded-md bg-lime-900 text-white w-1/3"
      >
        {"افزودن کار"}
      </Button>
    </div>
  );
}
