import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import PropertyCard from './PropertyCard';

import { PropertyProps, SellerInfoProps } from './PropertyProps';

// Mock the Image and Link components from Next.js
vi.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('PropertyCard component', () => {
  const mockProperty: PropertyProps = {
    _id: '12345',
    name: 'Beautiful Family House',
    type: 'House',
    beds: 4,
    baths: 3,
    square_feet: 2500,
    location: {
      city: 'Los Angeles',
      state: 'CA',
      street: '',
      zipcode: '',
    },
    images: ['house.jpg'],
    rates: {
      monthly: 4000,
      weekly: undefined,
      nightly: undefined,
    },
    owner: '',
    description: '',
    amenities: [],
    seller_info: {} as SellerInfoProps,
    is_featured: false,
    createdAt: '',
    updatedAt: '',
  };

  it('renders the property name, type, and location correctly', () => {
    render(<PropertyCard property={mockProperty} />);

    // Check if the property name, type, and location are rendered correctly
    expect(screen.getByText('Beautiful Family House')).toBeInTheDocument();
    expect(screen.getByText('House')).toBeInTheDocument();
    expect(screen.getByText('Los Angeles CA')).toBeInTheDocument();
  });

  it('renders the correct rate display for monthly rates', () => {
    render(<PropertyCard property={mockProperty} />);

    // Check if the rate display is rendered correctly
    expect(screen.getByText('$4,000/mo')).toBeInTheDocument();
  });

  it('renders the image with correct src attribute', () => {
    render(<PropertyCard property={mockProperty} />);

    // Check if the image is rendered with the correct src
    const imageElement = screen.getByAltText('');
    expect(imageElement).toHaveAttribute('src', '/images/properties/house.jpg');
  });

  it('renders the "Details" link with correct href', () => {
    render(<PropertyCard property={mockProperty} />);

    // Check if the "Details" link is rendered with the correct href
    const detailsLink = screen.getByText('Details');
    expect(detailsLink.closest('a')).toHaveAttribute('href', '/properties/12345');
  });

  it('renders different rate displays correctly', () => {
    const weeklyProperty = {
      ...mockProperty,
      rates: { monthly: undefined, weekly: 1000, nightly: null },
    };
    const nightlyProperty = {
      ...mockProperty,
      rates: { monthly: null, weekly: null, nightly: 150 },
    };

    render(<PropertyCard property={weeklyProperty} />);
    expect(screen.getByText('$1,000/wk')).toBeInTheDocument();

    render(<PropertyCard property={nightlyProperty} />);
    expect(screen.getByText('$150/night')).toBeInTheDocument();
  });
});
