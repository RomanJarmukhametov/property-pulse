import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DesktopMenuItemProps } from './DesktopMenuItemProps';

const DesktopMenuItem = ({ isLoggedIn, links }: DesktopMenuItemProps) => {
  const pathName = usePathname();

  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-2">
        {links.map((link) => {
          if (link.isLoggedInItem && !isLoggedIn) return null;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathName === link.href ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition-colors duration-300 ease-in-out`}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenuItem;
