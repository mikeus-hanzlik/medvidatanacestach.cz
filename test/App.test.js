import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

// Test wrapper component
const AppWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    );
    expect(document.body).toBeTruthy();
  });

  it('displays the main heading', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    );
    
    const heading = screen.getByRole('link', { name: /medvíďata na cestách/i });
    expect(heading).toBeTruthy();
  });  it('has proper semantic structure', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    );
    
    const bannerElements = screen.getAllByRole('banner');
    expect(bannerElements.length).toBeGreaterThan(0); // at least one header
    expect(screen.getByRole('main')).toBeTruthy(); // main content
    
    // Footer is currently hidden, so we check for its existence in DOM instead
    const footer = document.querySelector('footer[role="contentinfo"]');
    expect(footer).toBeTruthy();
  });
});
