import { ReactNode } from 'react';

type InputRootProps = {
  children: ReactNode;
  label: string;
  helperText?: string;
  htmlFor?: string;
};

export default function InputRoot({
  children,
  label,
  helperText,
  htmlFor,
}: InputRootProps) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <div className="flex items-center gap-2">{children}</div>
      <span className="text-xs text-red-500">{helperText}</span>
    </div>
  );
}
