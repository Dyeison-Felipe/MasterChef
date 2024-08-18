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
        className={twMerge(
          'w-full px-4 py-2 border-2 rounded-md outline-none mt-1',
          className,
        )}
        {...rest}
      />
    );
  },
);

export default InputField;
