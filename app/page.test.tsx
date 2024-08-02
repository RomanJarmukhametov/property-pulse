import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home Page')).toBeInTheDocument();
  });
});
