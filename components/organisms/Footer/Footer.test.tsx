import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Footer from './Footer';

// Mocking next/image and next/link components
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
}));

import { ReactNode } from 'react';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Footer component', () => {
  it('renders the logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo.png'));
  });

  it('renders the navigation links', () => {
    render(<Footer />);

    const propertiesLink = screen.getByRole('link', { name: /properties/i });
    expect(propertiesLink).toBeInTheDocument();
    expect(propertiesLink).toHaveAttribute('href', '/properties');

    const termsLink = screen.getByRole('link', { name: /terms of service/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('renders the copyright text with the current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    const copyrightText = screen.getByText(`© ${currentYear} PropertyPulse. All rights reserved.`);
    expect(copyrightText).toBeInTheDocument();
  });
});
