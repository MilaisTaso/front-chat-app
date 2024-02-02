import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { clsx } from 'clsx';

type LinkProps = {
  to: string;
} & NavLinkProps;

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        clsx(
          isPending && 'isPending',
          isActive && 'isActive',
          'text-indigo-600 hover:text-indigo-900',
          className,
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
