import Input from "../custom/input";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { UseContext } from "../context";

const PasswordInput = () => {
  const { toggle } = UseContext();
  return (
    <div className="p-2 w-full flex justify-center items-center h-full">
      <Input
        type={toggle ? "text" : "password"}
        className="border-2  rounded-md w-64 shadow-lg py-2"
        style={{
          iconStyles: "left-2 top-3 text-lg  absolute",
        }}
        icon={toggle ? <IoEyeOutline /> : <IoEyeOffOutline />}
      />
    </div>
  );
};

export default PasswordInput;
