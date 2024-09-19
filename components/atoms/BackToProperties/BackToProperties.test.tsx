import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import BackToProperties from './BackToProperties';

// Mock the Link component from Next.js
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock the react-icons FaArrowLeft icon
vi.mock('react-icons/fa', () => ({
  __esModule: true,
  FaArrowLeft: () => <svg data-testid="arrow-icon" />,
}));

describe('BackToProperties component', () => {
  it('renders the link with correct href and text', () => {
    render(<BackToProperties />);

    // Check that the link is rendered with the correct href
    const linkElement = screen.getByRole('link', { name: /back to properties/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/properties');
  });

  it('renders the arrow icon inside the link', () => {
    render(<BackToProperties />);

    // Check that the arrow icon is rendered inside the link
    const iconElement = screen.getByTestId('arrow-icon');
    expect(iconElement).toBeInTheDocument();

    // Check that the icon is inside the link
    const linkElement = screen.getByRole('link', { name: /back to properties/i });
    expect(linkElement).toContainElement(iconElement);
  });
});
