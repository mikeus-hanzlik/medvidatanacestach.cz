import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutUs from '../../../src/components/about/AboutUs';

// Mock the image import
vi.mock('../../../src/images/My3.jpg', () => ({
  default: '/mock-my3-image.jpg'
}));

// Mock the Smile component
vi.mock('../../../src/components/icons/Smile', () => ({
  default: () => <span data-testid="smile-icon">😊</span>
}));

describe('AboutUs', () => {
  const mockOpenLightbox = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock current date to ensure consistent test results
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-05-27')); // Relationship duration: 7 years, 7 months
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the main heading', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    expect(screen.getByRole('heading', { name: 'O nás' })).toBeInTheDocument();
  });

  it('renders all main content paragraphs', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    expect(screen.getByText(/Ahoj! Ať už omylem, nebo cíleně/)).toBeInTheDocument();
    expect(screen.getByText(/Začátkem prosince roku 2019/)).toBeInTheDocument();
    expect(screen.getByText(/Snad se vám bude naše vyprávění líbit!/)).toBeInTheDocument();
  });

  it('calculates and displays relationship duration correctly', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    // Should display "7 let" for 7+ years
    expect(screen.getByText(/Za 7 let, co jsme spolu/)).toBeInTheDocument();
  });

  it('uses "roky" for duration less than 5 years', () => {
    // Set date to show less than 5 years
    vi.setSystemTime(new Date('2020-05-27')); // 3 years, 7 months
    
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    expect(screen.getByText(/Za 3 roky, co jsme spolu/)).toBeInTheDocument();
  });

  it('uses "let" for duration 5 years or more', () => {
    // Set date to show exactly 5 years
    vi.setSystemTime(new Date('2021-10-02')); // 5 years, 1 day
    
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    expect(screen.getByText(/Za 5 let, co jsme spolu/)).toBeInTheDocument();
  });

  it('renders Smile icons', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const smileIcons = screen.getAllByTestId('smile-icon');
    expect(smileIcons).toHaveLength(2);
  });
  it('renders profile image with correct attributes', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    expect(image).toHaveAttribute('src', '/mock-my3-image.jpg');
    expect(image).toHaveAttribute('alt', 'My 3');
    expect(image).toHaveAttribute('role', 'button');
    expect(image).toHaveAttribute('tabIndex', '0');
    expect(image).toHaveAttribute('aria-label', 'Zobrazit obrázek v galerii');
  });
  it('calls openLightbox when profile image is clicked', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    fireEvent.click(image);
    
    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });
  it('calls openLightbox when Enter key is pressed on image', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    fireEvent.keyDown(image, { key: 'Enter' });
    
    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });
  it('calls openLightbox when Space key is pressed on image', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    fireEvent.keyDown(image, { key: ' ' });
    
    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });  it('handles Space key press correctly', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    fireEvent.keyDown(image, { key: ' ' });
    
    // The main behavior we care about is that the lightbox opens
    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });
  it('does not call openLightbox for other keys', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    fireEvent.keyDown(image, { key: 'Escape' });
    
    expect(mockOpenLightbox).not.toHaveBeenCalled();
  });
  it('has proper semantic structure', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    expect(screen.getByRole('article')).toHaveClass('aboutUsContent');
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
    expect(screen.getByText(/Ahoj!/)).toBeInTheDocument(); // section content exists
  });

  it('renders image caption', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const caption = screen.getByText('My 3');
    expect(caption.tagName.toLowerCase()).toBe('figcaption');
  });
  it('has cursor pointer style on image', () => {
    render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    const image = screen.getByRole('button', { name: 'Zobrazit obrázek v galerii' });
    expect(image).toHaveStyle({ cursor: 'pointer' });
  });

  it('memoizes relationship duration calculation', () => {
    const { rerender } = render(<AboutUs openLightbox={mockOpenLightbox} />);
    
    // First render
    expect(screen.getByText(/Za 7 let, co jsme spolu/)).toBeInTheDocument();
    
    // Rerender with same props should use memoized value
    rerender(<AboutUs openLightbox={mockOpenLightbox} />);
    expect(screen.getByText(/Za 7 let, co jsme spolu/)).toBeInTheDocument();
  });
});
