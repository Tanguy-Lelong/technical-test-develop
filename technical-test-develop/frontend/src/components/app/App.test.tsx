import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quizz app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Quiz app/i);
  expect(titleElement).toBeInTheDocument();
});
