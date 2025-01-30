import { TextareaHTMLAttributes } from "react";
type Styles = {
  iconStyle: string;
  parentClassName?: string;
};

export type TextareaProps = {
  icon?: React.ReactNode;
  onClick?: () => void;
  label?: string;
  styles?: Styles;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  styles,
  label,
  icon,
  onClick,
  ...props
}: TextareaProps) => {
  return (
    <div className={`relative  ${styles?.parentClassName}`}>
      <i
        onClick={onClick}
        className={`absolute cursor-pointer z-20 ${styles?.iconStyle} `}
      >
        {icon}
      </i>
      <div className="flex flex-col gap-2 relative">
        {label && (
          <label className="text-sm text-gray-400 absolute -top-6">
            {label}
          </label>
        )}

        <textarea {...props} />
      </div>
    </div>
  );
};

export default Textarea;
