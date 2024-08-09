interface LinkItem {
  text: string;
  href: string;
  isLoggedInItem?: boolean;
}

export interface NavbarMenuItemProps {
  isLoggedIn: boolean;
  links: LinkItem[];
  isForMobileMenu?: boolean;
}
