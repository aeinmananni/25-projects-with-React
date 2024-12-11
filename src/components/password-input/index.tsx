import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { UseContext } from "../../context";
import Input from "../../custom/input";

const PasswordInput = () => {
  const { toggle, setToggle } = UseContext();
  return (
    <div className="p-2 w-full flex justify-center items-center h-full">
      <Input
        onClick={() => setToggle && setToggle((c) => !c)}
        type={toggle ? "text" : "password"}
        className="border-2  rounded-md w-64 shadow-lg py-2 px-2"
        style={{
          iconStyles: "left-2 top-3 text-lg ",
        }}
        icon={toggle ? <IoEyeOutline /> : <IoEyeOffOutline />}
      />
    </div>
  );
};

export default PasswordInput;
