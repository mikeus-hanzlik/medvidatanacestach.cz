// Setup React Testing Library for Vitest
import '@testing-library/jest-dom'
import React from 'react'

// Import vitest APIs globally
import { vi } from 'vitest'

// Make vi available globally for mocking
global.vi = vi

// Mock yet-another-react-lightbox
vi.mock('yet-another-react-lightbox', () => {
  return {
    default: ({ open, close, slides, ...props }) => {
      if (!open) return null;
      
      return React.createElement('div', {
        'data-testid': 'lightbox-mock',
        onClick: close
      }, 'Lightbox Mock');
    }
  }
})

// Mock the CSS import
vi.mock('yet-another-react-lightbox/styles.css', () => ({}))
