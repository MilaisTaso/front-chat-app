import React from 'react';
import { clsx } from 'clsx';

import { Link, LinkProps } from '@/components/Elements/Link';

export type NavProps = {
  className?: string
  links: LinkProps[];
};

export const Nav: React.FC<NavProps> = ({links, className}) => {
  return (
    <nav>
      <ul className={clsx('flex gap-x-1 max-w-5xl', className)}>
        {
          links.map((link) => (
            <li key={link.to} className='flex-auto'>
              <Link {...link}>
                {link.children}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
