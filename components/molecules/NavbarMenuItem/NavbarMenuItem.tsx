import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarMenuItemProps } from './NavbarMenuItemProps';
import LoginOrRegisterButton from '@/components/atoms/LoginOrRegisterButton/LoginOrRegisterButton';

const NavbarMenuItem = ({ isLoggedIn, links, isForMobileMenu }: NavbarMenuItemProps) => {
  const pathName = usePathname();

  /**
   * The `renderLinks` function generates a list of links based on certain conditions and styling
   * classes in a TypeScript React component.
   * @param {boolean} isMobile - The `isMobile` parameter is a boolean value that indicates whether the
   * device viewing the links is a mobile device or not. This parameter is used to conditionally apply
   * different styles to the links based on the device type.
   */
  const renderLinks = (isMobile: boolean) =>
    links.map((link) => {
      if (link.isLoggedInItem && !isLoggedIn) return null;
      return (
        <Link
          key={link.href}
          href={link.href}
          className={`${pathName === link.href ? 'bg-black' : ''} text-white ${isMobile ? 'block' : 'hover:bg-gray-900 hover:text-white'} rounded-md px-3 py-2 ${isMobile ? 'text-base font-medium' : 'transition-colors duration-300 ease-in-out'}`}
        >
          {link.text}
        </Link>
      );
    });

  return (
    <>
      {!isForMobileMenu && (
        <div className="desktop-menu hidden md:ml-6 md:block">
          <div className="flex space-x-2">{renderLinks(false)}</div>
        </div>
      )}

      {isForMobileMenu && (
        <div id="mobile-menu">
          <div className="mobile-menu md:hidden space-y-1 px-2 pb-3 pt-2">
            {renderLinks(true)}
            {!isLoggedIn && <LoginOrRegisterButton isForMobileMenu />}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMenuItem;
