import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, Mock } from 'vitest';
import '@testing-library/jest-dom';
import ProfileDropdownButton from './ProfileDropdownButton';
import profileDefaultImage from '@/assets/images/profile.png';
import { StaticImageData } from 'next/image';

// Mock the next/image module
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('ProfileDropdownButton component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the button with default profile image', () => {
    const setIsProfileMenuOpen = vi.fn();
    render(
      <ProfileDropdownButton
        isProfileMenuOpen={false}
        setIsProfileMenuOpen={setIsProfileMenuOpen}
      />
    );

    const button = screen.getByRole('button', { name: /open user menu/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText('default profile image')).toHaveAttribute(
      'src',
      profileDefaultImage.src // Use .src to get the URL string
    );
  });

  it('renders the button with custom profile image', () => {
    const setIsProfileMenuOpen = vi.fn();
    const customProfileImage = '/custom/profile.png';

    render(
      <ProfileDropdownButton
        isProfileMenuOpen={false}
        setIsProfileMenuOpen={setIsProfileMenuOpen}
        profileDefault={customProfileImage as unknown as StaticImageData} // Type assertion
      />
    );

    const button = screen.getByRole('button', { name: /open user menu/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText('default profile image')).toHaveAttribute('src', customProfileImage);
  });
});
