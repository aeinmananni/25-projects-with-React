import { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type StylesType = {
  iconStyles?: string;
  parentClassName?: string;
};

type InputType = {
  icon?: React.ReactNode;
  style?: StylesType;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ onClick, style, icon, ...props }, ref) => {
    return (
      <div className={`relative w-full ${style?.parentClassName}`}>
        <i
          onClick={onClick}
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
