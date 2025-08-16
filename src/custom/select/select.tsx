import { SelectHTMLAttributes } from 'react';

type SelectProps = {
  options?: { label: string; value: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ options, ...props }: SelectProps) {
  return (
    <select {...props} className={`select select-bordered ${props.className}`}>
      {options?.map(it => (
        <option value={it.value}>{it.label}</option>
      ))}
    </select>
  );
}
