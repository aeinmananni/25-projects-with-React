import { InputHTMLAttributes } from 'react';

type RadioProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function radio({ label, ...props }: RadioProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm">{label}</label>
      <input {...props} type="radio" name="radio" className={`radio ${props.className}`} />
    </div>
  );
}
