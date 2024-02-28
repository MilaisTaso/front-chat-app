import React from 'react';
import { clsx } from 'clsx';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { useFetcher } from 'react-router-dom';
import { Link, LinkProps } from '@/components/Elements/Link';
import { Button } from '../Elements/Button';

export type NavProps = {
  className?: string;
  links: LinkProps[];
};

export const Nav: React.FC<NavProps> = ({ links, className }) => {
  const fetcher = useFetcher();
  return (
    <nav>
      <ul className={clsx('flex items-center max-w-5xl gap-x-3', className)}>
        {links.map((link) => (
          <li key={link.to} className="flex-auto">
            <Link {...link} className="text-center">
              {link.children}
            </Link>
          </li>
        ))}
        <li className="flex-auto">
          <fetcher.Form method="post" action="/logout">
            <Button className='py-0 px-0 bg-white border-none bg-gray-950'>
              <RiLogoutBoxRLine size="1.5rem" color="white" />
            </Button>
          </fetcher.Form>
        </li>
      </ul>
    </nav>
  );
};
