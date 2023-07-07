import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('MiComponente', () => {
  it('debe renderizar correctamente', () => {
    render(
      <App />
    );
    const componente = screen.getByText('App Finkargo Rick N morty API');
    expect(componente).toBeInTheDocument();
  });
});