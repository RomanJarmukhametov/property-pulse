import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

// Mock the dependent components
vi.mock('@/components/atoms/Logo/Logo', () => ({
  __esModule: true,
  default: () => <div data-testid="logo">Logo</div>,
}));

vi.mock('@/components/atoms/MobileMenuButton/MobileMenuButton', () => ({
  __esModule: true,
  default: ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  }: {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => (
    <button data-testid="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {isMobileMenuOpen ? 'Close Mobile Menu' : 'Open Mobile Menu'}
    </button>
  ),
}));

vi.mock('@/components/molecules/NavbarMenuItem/NavbarMenuItem', () => ({
  __esModule: true,
  default: ({ isForMobileMenu }: { isForMobileMenu: boolean }) => (
    <div data-testid={isForMobileMenu ? 'mobile-menu' : 'desktop-menu'}>
      {isForMobileMenu ? 'Mobile Menu Items' : 'Desktop Menu Items'}
    </div>
  ),
}));

vi.mock('@/components/atoms/ProfileDropdownButton/ProfileDropdownButton', () => ({
  __esModule: true,
  default: ({
    isProfileMenuOpen,
    setIsProfileMenuOpen,
  }: {
    isProfileMenuOpen: boolean;
    setIsProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => (
    <button
      data-testid="profile-dropdown-button"
      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
    >
      {isProfileMenuOpen ? 'Close Profile Menu' : 'Open Profile Menu'}
    </button>
  ),
}));

vi.mock('@/components/atoms/ProfileDropdown/ProfileDropdown', () => ({
  __esModule: true,
  default: () => <div data-testid="profile-dropdown">Profile Dropdown</div>,
}));

vi.mock('@/components/atoms/LoginOrRegisterButton/LoginOrRegisterButton', () => ({
  __esModule: true,
  default: () => <button data-testid="login-register-button">Login or Register</button>,
}));

vi.mock('@/components/atoms/NotificationsButton/NotificationsButton', () => ({
  __esModule: true,
  default: () => <button data-testid="notifications-button">Notifications</button>,
}));

describe('Navbar component', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders the desktop menu', () => {
    render(<Navbar />);
    expect(screen.getByTestId('desktop-menu')).toBeInTheDocument();
  });

  it('shows login or register button when logged out', () => {
    render(<Navbar />);
    expect(screen.getByTestId('login-register-button')).toBeInTheDocument();
  });

  it('renders the mobile menu when the mobile menu button is clicked', () => {
    render(<Navbar />);

    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    fireEvent.click(mobileMenuButton);

    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });
});
