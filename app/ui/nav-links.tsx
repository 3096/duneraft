'use client'


//Importing Icons
/*
import {

} from '@/public';
*/

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
    { name: 'Home', href: '/' },
    { name: 'Wiki', href: '/wiki', },
    { name: 'Events', href: '/events', },
    { name: 'Web Map', href: '/map', },
    { name: 'Redstone Tech', href: '/redstone', },

];

export default function NavLinks() {
    return (
    <>
      {links.map((link) => {
        const pathname = usePathname(); 
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            , {'bg-sky-100 text-blue-600': pathname === link.href}
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}