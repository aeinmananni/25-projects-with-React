import { FieldValues, Controller, ControllerProps } from "react-hook-form";
import { Textarea, TextareaProps } from "../../custom/textarea";
type TextareaControlerProps<T extends FieldValues> = {} & Omit<
  ControllerProps<T>,
  "render"
> &
  TextareaProps;

const TextareaControler = <T extends FieldValues>({
  ...props
}: TextareaControlerProps<T>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => <Textarea {...field} {...props} />}
    />
  );
};

export default TextareaControler;
