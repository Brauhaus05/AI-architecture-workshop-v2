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
    expect(screen.getByText(/REVOLUCIONA/)).toBeInTheDocument();
    expect(screen.getByText(/01_MÓDULOS_DEL_PROGRAMA/)).toBeInTheDocument();
    expect(screen.getAllByText(/BRAUHAUS/).length).toBeGreaterThan(0);
    expect(screen.getByText(/Protocolos_de_Soporte/)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    expect(screen.getAllByText(/PROGRAMA/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/TECNOLOGÍAS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/INSTRUCTOR/i).length).toBeGreaterThan(0);
  });
});
