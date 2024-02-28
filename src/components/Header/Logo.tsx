import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export type RouterLinkProps = {
  className?: string
  children: React.ReactNode
} & LinkProps

export const Logo: React.FC<RouterLinkProps> = ({
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <RouterLink {...props} className={clsx('font-bold text-heading2', className)}>
      {children}
    </RouterLink>
  );
};
