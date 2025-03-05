import { Form } from "./form";
import { Table } from "./table";
export default function Library() {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-32">
      <div className="flex w-full flex-col gap-2 justify-center items-center ">
        <span className="text-lg">{"لیست کتاب ها"}</span>
        <small>{"کتاب جدید خودرا به کتابخانه اضافه کنید"}</small>
      </div>
      <div className="flex justify-between p-4">
        <Form />
        <Table />
      </div>
    </div>
  );
}
