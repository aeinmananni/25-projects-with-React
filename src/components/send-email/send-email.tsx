import { InputControler } from "../../controler/input-controler";

import styles from "./style.module.css";
import Header from "./header";
import { EmailBoxType } from "./model";
import { useForm } from "react-hook-form";
import { TextareaControler } from "../../controler/textarea-controler";
import { Button } from "../../custom/button";
const SendEmail = () => {
  const { control, handleSubmit, reset } = useForm<EmailBoxType>();
  const onSubmit = (data: EmailBoxType) => {
    console.log("ONSUBMIT : ", data);
    reset({ email: "", fullName: "", exp: "" });
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/3 gap-9 shadow-lg rounded-md p-4 shadow-orange-200"
      >
        <Header />
        <div className="w-full flex flex-col gap-8">
          <InputControler
            control={control}
            name="fullName"
            className={styles.Input}
            label="نام و نام خانوادگی"
          />
          <InputControler
            control={control}
            name="email"
            className={styles.Input}
            label="ایمیل"
          />
          <TextareaControler
            control={control}
            name="exp"
            rows={6}
            label="توضیحات"
            className="border outline-none rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <Button
          type="submit"
          className="bg-orange-600 text-white w-1/4 rounded-sm text-sm mx-auto"
        >
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default SendEmail;
