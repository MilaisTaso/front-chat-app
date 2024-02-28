import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { id, label, className, registration, error } = props;
  return (
    <FieldWrapper id={id} label={label} error={error} className={className}>
      <textarea
        name={id}
        className="bg-white border-none appearance-none block w-full resize-none text-body border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        {...registration}
      />
    </FieldWrapper>
  );
};
