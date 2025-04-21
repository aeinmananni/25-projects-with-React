import { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type StylesType = {
  iconStyles?: string;
  parentClassName?: string;
};

export type InputProps = {
  icon?: React.ReactNode;
  label?: string;
  styles?: StylesType;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onClick, styles: style, icon, ...props }, ref) => {
    return (
      <div className={`relative  ${style?.parentClassName}`}>
        <i
          onClick={onClick}
          className={`absolute cursor-pointer z-20 ${style?.iconStyles} `}
        >
          {icon}
        </i>
        <div className="flex flex-col gap-2 relative">
          {label && (
            <label className="text-sm text-gray-400 absolute -top-6">
              {label}
            </label>
          )}

          <input ref={ref} {...props} />
        </div>
      </div>
    );
  }
);
export default Input;
