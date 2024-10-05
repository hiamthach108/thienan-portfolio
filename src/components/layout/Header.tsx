'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  {
    id: 'home',
    name: 'Home',
    url: '/',
  },
  { id: 'about-me', name: 'About Me', url: '/about-me' },
  { id: 'my-hobbies', name: 'My Hobbies', url: '/my-hobbies' },
  { id: 'personal-projects', name: 'Personal Projects', url: '/personal-projects' },
  { id: 'social-activities', name: 'Social Activities', url: '/social-activities' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fluid-container flex items-center justify-between">
      <div className="w-1/4 flex gap-2 items-center"></div>
      <div className="w-1/2 text-center">
        <h1 className="font-heading text-[40px] font-semibold">NGUYEN CAO THIEN AN</h1>
        <p className="text-base italic text-gray-700 font-light">
          &quot;Life is but a breeze, so make the most of it&quot;
        </p>
        <div className="flex items-center justify-center gap-5">
          {NAV_LINKS.map((navLink) => (
            <Link
              key={navLink.url}
              href={navLink.url}
              className="no-underline text-gray-800 mt-4 font-normal text-lg"
            >
              {navLink.name}

              {pathname === navLink.url && <div className="h-[1px] w-full bg-black" />}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/4"></div>
    </header>
  );
};

export default Header;
