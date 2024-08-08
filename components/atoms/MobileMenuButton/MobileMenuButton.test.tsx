import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenuButton from './MobileMenuButton';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

describe('MobileMenuButton component', () => {
  it('renders the button with correct aria attributes', () => {
    render(<MobileMenuButton isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />);
    const button = screen.getByRole('button', { name: /toggle main menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-controls', 'mobile-menu');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles aria-expanded attribute when clicked', () => {
    const setIsMobileMenuOpen = vi.fn();
    const { rerender } = render(
      <MobileMenuButton isMobileMenuOpen={false} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    );
    const button = screen.getByRole('button', { name: /toggle main menu/i });

    fireEvent.click(button);
    expect(setIsMobileMenuOpen).toHaveBeenCalledWith(true);

    // Re-render the component with updated prop
    rerender(
      <MobileMenuButton isMobileMenuOpen={true} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    );
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  //   it('renders the SVG icon correctly', () => {
  //     render(<MobileMenuButton isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />);
  //     const svgIcon = screen.getByRole('img', { hidden: true });
  //     expect(svgIcon).toBeInTheDocument();
  //     expect(svgIcon).toHaveAttribute('fill', 'none');
  //     expect(svgIcon).toHaveAttribute('viewBox', '0 0 24 24');
  //     expect(svgIcon).toHaveAttribute('stroke', 'currentColor');
  //   });

  it('renders the SVG icon correctly', () => {
    render(<MobileMenuButton isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />);
    const svgIcon = screen.getByTestId('menu-icon');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveAttribute('fill', 'none');
    expect(svgIcon).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svgIcon).toHaveAttribute('stroke', 'currentColor');
  });
});
