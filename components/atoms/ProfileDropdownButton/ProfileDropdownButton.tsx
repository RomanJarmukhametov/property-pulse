import Image from 'next/image';
import { ProfileDropdownButtonProps } from './ProfileDropdownButtonProps';
import profileDefaultImage from '@/assets/images/profile.png';

const ProfileDropdownButton = ({
  isProfileMenuOpen,
  setIsProfileMenuOpen,
  profileDefault = profileDefaultImage,
}: ProfileDropdownButtonProps) => {
  return (
    <button
      type="button"
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="default profile image" />
    </button>
  );
};

export default ProfileDropdownButton;
