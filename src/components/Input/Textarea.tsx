import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type InputTextareaProps = ComponentProps<'textarea'>;

export default function InputTextarea({
  className,
  ...rest
}: InputTextareaProps) {
  return (
    <>
      {' '}
      <textarea
        className={twMerge(
          'w-full px-4 py-2 border-2 rounded-md outline-none mt-1',
          className,
        )}
        {...rest}
      />
    </>
  );
}
