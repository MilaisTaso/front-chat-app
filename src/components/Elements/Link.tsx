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
          'hover:text-indigo-700 font-semibold text-center text-body',
          isActive && 'text-zinc-500',
          className,
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
