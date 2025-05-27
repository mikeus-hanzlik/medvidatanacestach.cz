// Mock the yet-another-react-lightbox module
jest.mock('yet-another-react-lightbox', () => {
  const React = require('react');
  return function MockLightbox({ open, close, slides, ...props }) {
    if (!open) return null;
    return React.createElement('div', { 
      'data-testid': 'lightbox-mock', 
      onClick: close 
    }, 'Lightbox Mock');
  };
});

// Mock the CSS import
jest.mock('yet-another-react-lightbox/styles.css', () => {});

// Setup React Testing Library
import '@testing-library/jest-dom';
