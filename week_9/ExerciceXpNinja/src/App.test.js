import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task manager heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /task manager/i })).toBeInTheDocument();
});
