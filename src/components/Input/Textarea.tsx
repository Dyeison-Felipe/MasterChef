import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputTextareaProps = ComponentProps<'textarea'>;

const InputTextarea = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <textarea ref={ref} className={twMerge('field', className)} {...rest} />
    );
  },
);

export default InputTextarea;
