import Link from 'next/link';
import { ProfileDropdownProps } from './ProfileDropdownProps';

const ProfileDropdown = ({ items }: ProfileDropdownProps) => {
  return (
    <div
      id="user-menu"
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      {items.map((item) =>
        item.isButton ? (
          <button
            key={item.id}
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id={item.id}
          >
            {item.label}
          </button>
        ) : (
          <Link
            key={item.id}
            href={item.href!}
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id={item.id}
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
};

export default ProfileDropdown;
