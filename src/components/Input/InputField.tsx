import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldProps = ComponentProps<'input'>;

const InputField = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        type="text"
        id="name"
        ref={ref}
        className={twMerge('field', className)}
        {...rest}
      />
    );
  },
);

export default InputField;
