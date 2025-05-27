import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Image from '../../../src/components/articles/Image';

describe('Image', () => {
  const mockLightboxImage = {
    src: '/test-image.jpg',
    caption: 'Test image caption'
  };

  const mockOpenLightbox = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders image with correct src and alt attributes', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockLightboxImage.src);
    expect(image).toHaveAttribute('alt', mockLightboxImage.caption);
  });

  it('renders caption in figcaption when provided', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    expect(screen.getByText(mockLightboxImage.caption)).toBeInTheDocument();
  });

  it('renders children in figcaption when provided', () => {
    const childText = 'Additional caption content';
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox}
      >
        {childText}
      </Image>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('calls openLightbox when image is clicked', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    fireEvent.click(image);

    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });

  it('calls openLightbox when Enter key is pressed', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    fireEvent.keyDown(image, { key: 'Enter' });

    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });

  it('calls openLightbox when Space key is pressed', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    fireEvent.keyDown(image, { key: ' ' });

    expect(mockOpenLightbox).toHaveBeenCalledWith(0);
  });

  it('does not call openLightbox for other keys', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    fireEvent.keyDown(image, { key: 'Escape' });

    expect(mockOpenLightbox).not.toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('tabIndex', '0');
    expect(image).toHaveAttribute('role', 'button');
    expect(image).toHaveAttribute('aria-label', `Zobrazit obrázek "${mockLightboxImage.caption}" v galerii`);
  });

  it('uses default alt text when caption is not provided', () => {
    const imageWithoutCaption = { src: '/test-image.jpg' };
    render(
      <Image 
        lightboxImage={imageWithoutCaption} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Obrázek z cesty');
    expect(image).toHaveAttribute('aria-label', 'Zobrazit obrázek "obrázek z cesty" v galerii');
  });

  it('handles missing openLightbox function gracefully', () => {
    render(
      <Image lightboxImage={mockLightboxImage} />
    );

    const image = screen.getByRole('img');
    expect(() => fireEvent.click(image)).not.toThrow();
  });

  it('returns null when lightboxImage is missing', () => {
    const { container } = render(<Image openLightbox={mockOpenLightbox} />);
    expect(container.firstChild).toBeNull();
  });

  it('returns null when lightboxImage.src is missing', () => {
    const invalidImage = { caption: 'Caption without src' };
    const { container } = render(
      <Image 
        lightboxImage={invalidImage} 
        openLightbox={mockOpenLightbox} 
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it('has cursor pointer style', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveStyle({ cursor: 'pointer' });
  });

  it('has lazy loading attribute', () => {
    render(
      <Image 
        lightboxImage={mockLightboxImage} 
        openLightbox={mockOpenLightbox} 
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('does not render figcaption when no caption or children', () => {
    const imageWithoutCaption = { src: '/test-image.jpg' };
    render(
      <Image 
        lightboxImage={imageWithoutCaption} 
        openLightbox={mockOpenLightbox} 
      />
    );

    expect(screen.queryByRole('caption')).not.toBeInTheDocument();
  });
});
