import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import ProfileDropdown from './ProfileDropdown';

const items = [
  { id: 'profile', label: 'Your Profile', href: '/profile', isButton: false },
  { id: 'settings', label: 'Settings', href: '/settings', isButton: false },
  { id: 'logout', label: 'Sign Out', isButton: true },
];

describe('ProfileDropdown component', () => {
  it('renders the dropdown menu with links and buttons', () => {
    render(<ProfileDropdown items={items} />);

    // Verify the presence of link items
    const profileLink = screen.getByRole('menuitem', { name: /your profile/i });
    const settingsLink = screen.getByRole('menuitem', { name: /settings/i });

    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/profile');

    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink).toHaveAttribute('href', '/settings');

    // Verify the presence of button items
    const logoutButton = screen.getByRole('menuitem', { name: /sign out/i });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton.tagName).toBe('BUTTON');
  });

  it('applies the correct classes and attributes to links and buttons', () => {
    render(<ProfileDropdown items={items} />);

    const profileLink = screen.getByRole('menuitem', { name: /your profile/i });
    const settingsLink = screen.getByRole('menuitem', { name: /settings/i });
    const logoutButton = screen.getByRole('menuitem', { name: /sign out/i });

    // Check common classes
    expect(profileLink).toHaveClass('block px-4 py-2 text-sm text-gray-700');
    expect(settingsLink).toHaveClass('block px-4 py-2 text-sm text-gray-700');
    expect(logoutButton).toHaveClass('block px-4 py-2 text-sm text-gray-700');

    // Check specific attributes
    expect(profileLink).toHaveAttribute('tabIndex', '-1');
    expect(settingsLink).toHaveAttribute('tabIndex', '-1');
    expect(logoutButton).toHaveAttribute('tabIndex', '-1');
  });
});
