import Input from "../custom/input";
import { IoEyeOutline } from "react-icons/io5";

const PasswordInput = () => {
  return (
    <div className="p-2 w-full flex justify-center items-center h-full">
      <Input
        type="password"
        className="border-2  rounded-md w-64 shadow-lg py-2"
        style={{
          iconStyles: "left-2 top-3 text-lg  absolute",
        }}
        icon={<IoEyeOutline />}
      />
    </div>
  );
};

export default PasswordInput;
