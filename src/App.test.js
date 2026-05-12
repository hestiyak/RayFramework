// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RayFramework title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RayFramework/i);
    expect(titleElement).toBeInTheDocument();
});
