/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, Controller, ControllerProps } from "react-hook-form";
import { Input, InputProps } from "../../custom/input";

type InputControlerProps<T extends FieldValues> = {} & Omit<
  ControllerProps<T>,
  "render"
> &
  InputProps;

export default function InputControler<T extends FieldValues>({
  ...props
}: InputControlerProps<T>) {
  return (
    <Controller
      {...props}
      render={({ field }) => <Input {...field} {...props} />}
    />
  );
}
