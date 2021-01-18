import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Uma nova ferramenta/i);
  expect(linkElement).toBeInTheDocument();
});
