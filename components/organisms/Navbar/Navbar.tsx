'use client';

import Logo from '@/components/atoms/Logo/Logo';
import MobileMenuButton from '@/components/atoms/MobileMenuButton/MobileMenuButton';
import NavbarMenuItem from '@/components/molecules/NavbarMenuItem/NavbarMenuItem';
import ProfileDropdownButton from '@/components/atoms/ProfileDropdownButton/ProfileDropdownButton';
import ProfileDropdown from '@/components/atoms/ProfileDropdown/ProfileDropdown';
import LoginOrRegisterButton from '@/components/atoms/LoginOrRegisterButton/LoginOrRegisterButton';
import NotificationsButton from '@/components/atoms/NotificationsButton/NotificationsButton';

import { useState } from 'react';

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
            <NavbarMenuItem isLoggedIn={isLoggedIn} links={links} />
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
              <NotificationsButton />
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
      {isMobileMenuOpen && <NavbarMenuItem isLoggedIn={isLoggedIn} links={links} isForMobileMenu />}
    </nav>
  );
};

export default Navbar;
