import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Coding challange title', () => {
  render(<App />);
  const linkElement = screen.getByText('Coding Challange');
  expect(linkElement).toBeInTheDocument();
});
