import * as React from 'react';

type ContentProps = {
  children: React.ReactNode;
  title?: string; 
};

export const Content: React.FC<ContentProps> = ({ children, title }) => {
  return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-heading1 font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
      </div>
  );
};