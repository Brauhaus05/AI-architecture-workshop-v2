import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('A.I. ARCHITECT')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    expect(screen.getByText(/REVOLUTIONIZE/)).toBeInTheDocument();
    expect(screen.getByText(/01_CURRICULUM_MODULES/)).toBeInTheDocument();
    expect(screen.getAllByText(/BRAUHAUS/).length).toBeGreaterThan(0);
    expect(screen.getByText(/Support_Protocols/)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getAllByText(/CURRICULUM/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/TECH_STACK/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/INSTRUCTOR/i).length).toBeGreaterThan(0);
  });
});
