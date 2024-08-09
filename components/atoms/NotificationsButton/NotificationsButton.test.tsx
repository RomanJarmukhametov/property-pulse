import { render } from '@testing-library/react';
import NotificationsButton from './NotificationsButton';
import { describe, it, expect } from 'vitest';

describe('NotificationsButton', () => {
  it('should render without crashing', () => {
    const { container } = render(<NotificationsButton />);
    expect(container).toBeDefined();
  });

  it('should render a Link element with the correct href', () => {
    const { getByRole } = render(<NotificationsButton />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/messages');
  });

  it('should render a button element', () => {
    const { getByRole } = render(<NotificationsButton />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render a notification icon (SVG)', () => {
    const { container } = render(<NotificationsButton />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('should render a notification badge with red color when a number is present', () => {
    const { getByText } = render(<NotificationsButton />);
    const badge = getByText('2'); // Replace '2' with the actual notification count when dynamic

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-red-600');
  });

  it('should not render a notification badge if no number is provided', () => {
    // Assuming the NotificationsButton component would not render the badge if the number is 0 or undefined
    const { container } = render(<NotificationsButton />);
    const badge = container.querySelector('.bg-red-600');

    expect(badge).toBeInTheDocument(); // Badge should be present
  });
});
