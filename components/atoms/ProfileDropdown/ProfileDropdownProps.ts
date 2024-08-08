interface ProfileDropdownItem {
  id: string;
  href?: string;
  label: string;
  isButton?: boolean;
}

export interface ProfileDropdownProps {
  items: ProfileDropdownItem[];
}
