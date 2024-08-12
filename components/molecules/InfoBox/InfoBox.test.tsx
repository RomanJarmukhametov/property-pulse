import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import InfoBox from './InfoBox';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    props: any;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('InfoBox component', () => {
  const defaultProps = {
    heading: 'Test Heading',
    description: 'Test Description',
    buttonInfo: {
      text: 'Click Me',
      link: '/test-link',
      backgroundColor: 'bg-blue-500',
    },
  };

  it('renders the heading and description', () => {
    render(<InfoBox {...defaultProps} />);

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('applies default background and text colors', () => {
    render(<InfoBox {...defaultProps} />);

    const container = screen.getByText('Test Heading').closest('div');
    expect(container).toHaveClass('bg-gray-100');
    expect(screen.getByText('Test Heading')).toHaveClass('text-gray-800 text-2xl font-bold');
    expect(screen.getByText('Test Description')).toHaveClass('text-gray-800 mt-2 mb-4');
  });

  it('applies custom background and text colors', () => {
    const customProps = {
      ...defaultProps,
      backgroundColor: 'bg-red-500',
      textColor: 'text-white',
    };
    render(<InfoBox {...customProps} />);

    const container = screen.getByText('Test Heading').closest('div');
    expect(container).toHaveClass('bg-red-500');
    expect(screen.getByText('Test Heading')).toHaveClass('text-white text-2xl font-bold');
    expect(screen.getByText('Test Description')).toHaveClass('text-white mt-2 mb-4');
  });

  it('renders the button with correct link and styles', () => {
    render(<InfoBox {...defaultProps} />);

    const button = screen.getByRole('link', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/test-link');
    expect(button).toHaveClass(
      'bg-blue-500 inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors transition-duration-300 ease-in-out'
    );
  });
});
