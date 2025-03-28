import { InputControler } from "../../controler/input-controler";
import emailjs from "@emailjs/browser";
import styles from "./style.module.css";
import Header from "./header";
import { EmailBoxType } from "./model";
import { useForm } from "react-hook-form";
import { TextareaControler } from "../../controler/textarea-controler";
import { Button } from "../../custom/button";
import { useRef } from "react";
import { useReactContext } from "../../context";
import { Alert } from "../alert";
const SendEmail = () => {
  const { setAlert, alert } = useReactContext();
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<EmailBoxType>();
  const onSubmit = async () => {
    if (formRef.current) {
      await emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(() => {
          setAlert({ message: "پیام شما با موفقیت ارسال شد", type: "success" });
          reset({ email: "", fullName: "", exp: "" });
        })
        .catch(() => {
          setAlert({ message: "خطا درارسال ایمیل", type: "error" });
        });
    }
    reset({ email: "", fullName: "", exp: "" });
  };
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {alert.message && <Alert />}
      <form
        ref={formRef}
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
          disabled={isSubmitting}
          type="submit"
          className={` text-white w-1/4 rounded-sm text-sm mx-auto ${
            !isSubmitting ? "bg-orange-600" : " bg-orange-200"
          }`}
        >
          {!isSubmitting ? "ارسال" : "درحال ارسال..."}
        </Button>
      </form>
    </div>
  );
};

export default SendEmail;
