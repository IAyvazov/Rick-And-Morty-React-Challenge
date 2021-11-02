import { render, screen } from '@testing-library/react';
import App from './App';

import {} from 'raect-bootstrap';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Next');
  expect(linkElement).toBe('Next');
});
