import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import DesktopMenuItem from './DesktopMenuItem';
import { usePathname } from 'next/navigation';
import '@testing-library/jest-dom';

// Mock the next/navigation module
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

const links = [
  { href: '/home', text: 'Home', isLoggedInItem: false },
  { href: '/profile', text: 'Profile', isLoggedInItem: true },
];

describe('DesktopMenuItem component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the correct links when the user is not logged in', () => {
    (usePathname as Mock).mockReturnValue('/home');

    render(<DesktopMenuItem isLoggedIn={false} links={links} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
  });

  it('renders the correct links when the user is logged in', () => {
    (usePathname as Mock).mockReturnValue('/home');

    render(<DesktopMenuItem isLoggedIn={true} links={links} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('applies the correct class based on the current pathname', () => {
    (usePathname as Mock).mockReturnValue('/home');
    render(<DesktopMenuItem isLoggedIn={true} links={links} />);

    const homeLink = screen.getByText('Home');
    const profileLink = screen.getByText('Profile');

    expect(homeLink).toHaveClass('bg-black');
    expect(profileLink).not.toHaveClass('bg-black');
  });

  it('applies hover and other classes correctly', () => {
    (usePathname as Mock).mockReturnValue('/home');
    render(<DesktopMenuItem isLoggedIn={true} links={links} />);

    const homeLink = screen.getByText('Home');
    const profileLink = screen.getByText('Profile');

    expect(homeLink).toHaveClass(
      'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition-colors duration-300 ease-in-out'
    );
    expect(profileLink).toHaveClass(
      'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition-colors duration-300 ease-in-out'
    );
  });
});
