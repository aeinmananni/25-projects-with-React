import { Button } from "../../../custom/button";

import { BooksType } from "../model";
import { InputControler } from "../../../controler/input-controler";
import { useForm } from "react-hook-form";
const className =
  "border outline-none border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-sm ring-offset-2";

const Form = () => {
  const { control, handleSubmit, reset } = useForm<BooksType>();

  const onSubmit = (data: BooksType) => {
    console.log(data);
    reset({ author: "", bookNumber: "", title: "" });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/3 shadow-lg gap-10 py-8 px-2 border"
    >
      <InputControler
        control={control}
        name="title"
        className={className}
        label="نام کتاب"
      />
      <InputControler
        control={control}
        name="author"
        className={className}
        label="نویسنده"
      />
      <InputControler
        control={control}
        name="bookNumber"
        className={className}
        label="شماره"
      />
      <Button
        type="submit"
        className="bg-blue-600 text-white rounded-md px-3 py-1 w-1/2 mx-auto"
      >
        {"ثبت"}
      </Button>
    </form>
  );
};

export default Form;
