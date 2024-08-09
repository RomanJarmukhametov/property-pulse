import { render } from '@testing-library/react';
import LoginOrRegisterButton from './LoginOrRegisterButton';
import { describe, it, expect } from 'vitest';

describe('LoginOrRegisterButton', () => {
  it('should render without crashing', () => {
    const { container } = render(<LoginOrRegisterButton isForMobileMenu={false} />);
    expect(container).toBeDefined();
  });

  it('should render the Google icon and text', () => {
    const { getByText, getByRole } = render(<LoginOrRegisterButton isForMobileMenu={false} />);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(/Login or Register/i)).toBeInTheDocument();
  });

  it('should have the correct classes when isForMobileMenu is false', () => {
    const { getByRole } = render(<LoginOrRegisterButton isForMobileMenu={false} />);
    const button = getByRole('button');
    expect(button).toHaveClass(
      'flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    );
    expect(button).not.toHaveClass('my-5');
  });

  it('should have the correct classes when isForMobileMenu is true', () => {
    const { getByRole } = render(<LoginOrRegisterButton isForMobileMenu={true} />);
    const button = getByRole('button');
    expect(button).toHaveClass(
      'flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-5'
    );
  });
});
