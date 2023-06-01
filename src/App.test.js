import { render, screen } from '@testing-library/react';
import App from './App';

test('renders get user button', () => {
  render(<App />);
  const linkElement = screen.getByText(/GET user/i);
  expect(linkElement).toBeInTheDocument();
});
