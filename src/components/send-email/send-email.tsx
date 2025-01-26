import Input from "../../custom/input";
import Textarea from "../../custom/textarea";
import Button from "../../custom/button";
import styles from "./style.module.css";
import Header from "./header";
import { EmailBoxType } from "./model";
const SendEmail = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="flex flex-col w-1/3 gap-9 shadow-lg rounded-md p-4">
        <Header />
        <div className="w-full flex flex-col gap-6">
          <Input className={styles.Input} label="نام و نام خانوادگی" />
          <Input className={styles.Input} label="ایمیل" />
          <Textarea
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
