import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '@/components/Elements/Spinner';

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-body',
  md: 'py-2 px-6 text-body',
  lg: 'py-3 px-8 text-lg',
};

// React.ButtonHTMLAttributesを継承しているためbuttonが持つ属性を継承している
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center m-2 gap-2">
            <Spinner size="sm" className="text-current" />
            Loading...
          </span>
        ) : (
          <span className="mx-2 flex items-center">{props.children}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
