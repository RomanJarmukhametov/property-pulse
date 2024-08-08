import { StaticImageData } from 'next/image';

export interface ProfileDropdownButtonProps {
  isProfileMenuOpen: boolean;
  setIsProfileMenuOpen: (isProfileMenuOpen: boolean) => void;
  profileDefault?: StaticImageData;
}
