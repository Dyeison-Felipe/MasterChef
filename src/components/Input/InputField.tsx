import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldProps = ComponentProps<'input'>;

export default function InputField({ className, ...rest }: FieldProps) {
  return (
    <>
      <input
        type="text"
        id="name"
        className={twMerge(
          'w-full px-4 py-2 border-2 rounded-md outline-none mt-1',
          className,
        )}
        {...rest}
      />
    </>
  );
}
