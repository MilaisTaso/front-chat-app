import React from 'react';
import { clsx } from 'clsx';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { toast } from 'react-toastify';
import { Link, LinkProps } from '@/components/Elements/Link';
import { Button } from '../Elements/Button';
import { useSignOut } from '@/features/auth/api/auth';

export type NavProps = {
  className?: string;
  links: LinkProps[];
};

export const Nav: React.FC<NavProps> = ({ links, className }) => {
  const mutation = useSignOut();
  const handleSignOut = async () => {
    await mutation.mutateAsync(undefined);
  };
  return (
    <nav>
      <ul className={clsx('flex items-center max-w-5xl gap-x-2', className)}>
        {links.map((link) => (
          <li key={link.to} className="flex-auto">
            <Link {...link} className="text-center">
              {link.children}
            </Link>
          </li>
        ))}
        <li className="flex-auto">
          <Button
            className="py-0 px-0 border-none bg-gray-950"
            type="submit"
            onClick={handleSignOut}
          >
            <RiLogoutBoxRLine size="1.5rem" color="white" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
