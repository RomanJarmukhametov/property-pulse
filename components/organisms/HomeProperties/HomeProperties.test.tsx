import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import HomeProperties from './HomeProperties';
import properties from '@/properties.json';

// Mock the imported components
vi.mock('@/components/organisms/PropertyCard/PropertyCard', () => ({
  __esModule: true,
  default: ({ property }: { property: any }) => <div>{property.name}</div>,
}));

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('HomeProperties component', () => {
  it('renders the heading correctly', () => {
    render(<HomeProperties />);

    // Check if the heading is rendered correctly
    expect(screen.getByText('Recent Properties')).toBeInTheDocument();
  });

  it('displays the "No properties found" message when there are no properties', () => {
    // Backup the original properties data
    const originalProperties = [...properties];

    // Empty the properties array to simulate no properties
    properties.length = 0;

    render(<HomeProperties />);

    // Check if the "No properties found" message is displayed
    expect(screen.getByText('No properties found')).toBeInTheDocument();

    // Restore the original properties data after the test
    properties.push(...originalProperties);
  });

  it('renders PropertyCard components for the first three properties', () => {
    render(<HomeProperties />);

    // Check if the PropertyCard components are rendered for the first three properties
    const recentProperties = properties.slice(0, 3);
    recentProperties.forEach((property) => {
      expect(screen.getByText(property.name)).toBeInTheDocument();
    });
  });

  it('renders the "View All Properties" link with correct href', () => {
    render(<HomeProperties />);

    const linkElement = screen.getByRole('link', { name: /view all properties/i });
    expect(linkElement).toHaveAttribute('href', '/properties');
  });
});
