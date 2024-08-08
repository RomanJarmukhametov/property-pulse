import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...rest }: any) => {
    return <a {...rest}>{children}</a>;
  },
}));

describe('Logo component', () => {
  it('renders the logo image with correct alt text', () => {
    render(<Logo />);
    const logoImage = screen.getByAltText('PropertyPulse');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', expect.stringContaining('logo-white.png'));
  });

  it('contains a link to the homepage', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link', { name: /propertypulse/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('conditionally renders the text based on screen size', () => {
    render(<Logo />);
    const textElement = screen.getByText('PropertyPulse');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('hidden md:block');
    expect(textElement).toHaveClass('text-white text-2xl font-bold ml-2');
  });
});
