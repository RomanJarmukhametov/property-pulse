interface LinkItem {
  text: string;
  href: string;
  isLoggedInItem?: boolean;
}

export interface DesktopMenuItemProps {
  isLoggedIn: boolean;
  links: LinkItem[];
}
