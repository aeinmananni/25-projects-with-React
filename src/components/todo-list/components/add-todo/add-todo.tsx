import { Input } from "../../../../custom/input";
import { Button } from "../../../../custom/button";
export default function AddTodo() {
  return (
    <div className="w-full flex flex-row-reverse items-center gap-2">
      <Input
        className="py-1 px-2 rounded-md"
        styles={{ parentClassName: "w-full" }}
      />
      <Button className="p-1 rounded-md bg-lime-900 text-white w-1/3">
        {"افزودن کار"}
      </Button>
    </div>
  );
}
