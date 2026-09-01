// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockVaultPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockVaultPlus/i);
    expect(titleElement).toBeInTheDocument();
});
