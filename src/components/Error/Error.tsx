import React from 'react';
import { ErrorFallback } from './Fallback';

export type ErrorPageProps = {
  status?: string;
  message?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  status = '404',
  message,
}) => {
  return (
    <div className="flex flex-col items-center justify-content min-h-screen min-w-screen">
      <div className='flex flex-col items-center justify-content gap-3'>
        <h3 className='text-heading2'>Front Chat APP</h3>
        <h1 className='text-heading1'>{status}</h1>
        {message && <p className='text-body'>{message}</p>}
        <ErrorFallback />
      </div>
    </div>
  );
};
