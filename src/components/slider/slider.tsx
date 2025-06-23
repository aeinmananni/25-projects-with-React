import { Carts } from "./components";

export default function Slider() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <h1 className="underline underline-offset-8 decoration-2xl  decoration-red-500 text-2xl">
        نظرات مشتریان
      </h1>
      <Carts />
    </div>
  );
}
