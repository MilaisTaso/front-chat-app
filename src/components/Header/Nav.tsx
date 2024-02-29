import React from 'react';
import { clsx } from 'clsx';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { useFetcher } from 'react-router-dom';
import { Link, LinkProps } from '@/components/Elements/Link';
import { Button } from '../Elements/Button';

export type LinkItems = {
  links: LinkProps[];
};

export type NavProps = {
  className?: string;
} & LinkItems;

export const Nav: React.FC<NavProps> = ({ links, className }) => {
  const fetcher = useFetcher();
  return (
    <nav>
      <ul
        className={clsx('flex items-center max-w-5xl gap-x-2 py-2', className)}
      >
        {links.map((link) => (
          <li key={link.to} className="flex-auto">
            <Link {...link} className="">
              {link.children ?? link.to.substring(1) === '' ? 'Top' : link.to}
            </Link>
          </li>
        ))}
        <li className="flex-auto">
          <fetcher.Form method="post" action="/logout">
            <Button
              size="elementOnly"
              className="border-none bg-gray-950"
              type="submit"
            >
              <RiLogoutBoxRLine size="1.5rem" color="white" />
            </Button>
          </fetcher.Form>
        </li>
      </ul>
    </nav>
  );
};
