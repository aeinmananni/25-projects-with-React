import { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { UseContext } from "../context";

type StylesType = {
  iconStyles?: string;
  parentClassName?: string;
};

type InputType = {
  icon?: React.ReactNode;
  style?: StylesType;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ style, icon, ...props }, ref) => {
    const { setToggle } = UseContext();
    return (
      <div className={`relative w-full ${style?.parentClassName}`}>
        <i
          onClick={() => setToggle && setToggle((c) => !c)}
          className={`absolute cursor-pointer ${style?.iconStyles} `}
        >
          {icon}
        </i>
        <input ref={ref} {...props} />
      </div>
    );
  }
);
export default Input;
