'use client';

import Link from 'next/link';

import Logo from '@/components/atoms/Logo/Logo';
import MobileMenuButton from '@/components/atoms/MobileMenuButton/MobileMenuButton';
import DesktopMenuItem from '@/components/atoms/DesktopMenuItem/DesktopMenuItem';
import ProfileDropdownButton from '@/components/atoms/ProfileDropdownButton/ProfileDropdownButton';
import ProfileDropdown from '@/components/atoms/ProfileDropdown/ProfileDropdown';
import LoginOrRegisterButton from '@/components/atoms/LoginOrRegisterButton/LoginOrRegisterButton';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Properties', href: '/properties' },
    { text: 'Add Property', href: '/properties/add', isLoggedInItem: true },
  ];

  const profileDropdownItems = [
    { href: '/profile', label: 'Your Profile', id: 'user-menu-item-0' },
    { href: '/properties/saved', label: 'Saved Properties', id: 'user-menu-item-1' },
    { label: 'Sign Out', id: 'user-menu-item-2', isButton: true },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const pathName = usePathname();

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <MobileMenuButton
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Logo />

            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <DesktopMenuItem isLoggedIn={isLoggedIn} links={links} />
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!isLoggedIn && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <LoginOrRegisterButton />
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}

          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  2{/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className="relative ml-3">
                <div>
                  <ProfileDropdownButton
                    isProfileMenuOpen={isProfileMenuOpen}
                    setIsProfileMenuOpen={setIsProfileMenuOpen}
                  />
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && <ProfileDropdown items={profileDropdownItems} />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="md:hidden space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`${pathName === '/' ? 'bg-black' : ''} text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`${pathName === '/properties' ? 'bg-black' : ''} text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Properties
            </Link>

            {isLoggedIn && (
              <Link
                href="/properties/add"
                className={`${pathName === '/properties/add' ? 'bg-black' : ''} text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Add Property
              </Link>
            )}

            {!isLoggedIn && <LoginOrRegisterButton isForMobileMenu />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
