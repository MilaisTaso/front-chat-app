import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { clsx } from 'clsx';

export type LinkProps = {
  to: string;
} & NavLinkProps;

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'text-indigo-600 hover:text-indigo-900 font-semibold',
          isActive && 'text-red-300',
          className,
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
