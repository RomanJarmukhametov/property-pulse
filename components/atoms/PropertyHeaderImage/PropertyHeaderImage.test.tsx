import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import PropertyHeaderImage from './PropertyHeaderImage';

// Mock the `next/image` component to prevent issues with the Next.js Image optimization in the test environment
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe('PropertyHeaderImage component', () => {
  it('renders the image with the correct source and alt attributes', () => {
    const mockImage = 'mock-image.jpg';

    render(<PropertyHeaderImage image={mockImage} />);

    const imgElement = screen.getByRole('img');

    // Check that the image element is in the document
    expect(imgElement).toBeInTheDocument();

    // Check that the src attribute is correct
    expect(imgElement).toHaveAttribute('src', `/images/properties/${mockImage}`);

    // Check that the alt attribute is an empty string as specified
    expect(imgElement).toHaveAttribute('alt', 'Property Image');
  });

  it('renders the image with the correct class and size', () => {
    const mockImage = 'mock-image.jpg';

    render(<PropertyHeaderImage image={mockImage} />);

    const imgElement = screen.getByRole('img');

    // Check that the image has the correct class for object-cover and full width
    expect(imgElement).toHaveClass('object-cover h-[400px] w-full');
  });
});
