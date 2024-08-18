import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputTextareaProps = ComponentProps<'textarea'>;

const InputTextarea = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={twMerge(
          'w-full px-4 py-2 border-2 rounded-md outline-none mt-1',
          className,
        )}
        {...rest}
      />
    );
  },
);

export default InputTextarea;
