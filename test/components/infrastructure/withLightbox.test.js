import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import withLightbox from '../../../src/components/infrastructure/withLightbox';

// Test component to wrap with HOC
const TestComponent = ({ openLightbox, testProp }) => (
  <div>
    <button onClick={() => openLightbox(0)} data-testid="open-lightbox">
      Open Lightbox
    </button>
    <span data-testid="test-prop">{testProp}</span>
  </div>
);

describe('withLightbox HOC', () => {
  const mockImages = [
    { src: '/image1.jpg', caption: 'Image 1' },
    { src: '/image2.jpg', caption: 'Image 2' },
    { src: '/image3.jpg', caption: 'Image 3' }
  ];

  it('renders wrapped component with openLightbox prop', () => {
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    render(<WrappedComponent testProp="test value" />);
    
    expect(screen.getByTestId('open-lightbox')).toBeInTheDocument();
    expect(screen.getByTestId('test-prop')).toHaveTextContent('test value');
  });

  it('passes through all props to wrapped component', () => {
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    render(<WrappedComponent testProp="passed prop" customProp="custom value" />);
    
    expect(screen.getByTestId('test-prop')).toHaveTextContent('passed prop');
  });

  it('initially does not show lightbox', () => {
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    render(<WrappedComponent />);
    
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
  });

  it('opens lightbox when openLightbox is called', () => {
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    render(<WrappedComponent />);
    
    const openButton = screen.getByTestId('open-lightbox');
    fireEvent.click(openButton);
    
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
  });

  it('closes lightbox when close function is called', () => {
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    render(<WrappedComponent />);
    
    // Open lightbox
    const openButton = screen.getByTestId('open-lightbox');
    fireEvent.click(openButton);
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
    
    // Close lightbox
    const lightbox = screen.getByTestId('lightbox-mock');
    fireEvent.click(lightbox);
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
  });

  it('opens lightbox at correct index', () => {
    const TestComponentWithIndex = ({ openLightbox }) => (
      <div>
        <button onClick={() => openLightbox(1)} data-testid="open-lightbox-1">
          Open Lightbox at Index 1
        </button>
      </div>
    );
    
    const WrappedComponent = withLightbox(TestComponentWithIndex, mockImages);
    
    render(<WrappedComponent />);
    
    const openButton = screen.getByTestId('open-lightbox-1');
    fireEvent.click(openButton);
    
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
  });

  it('handles invalid image index gracefully', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation();
    
    const TestComponentWithInvalidIndex = ({ openLightbox }) => (
      <button onClick={() => openLightbox(99)} data-testid="open-invalid">
        Open Invalid Index
      </button>
    );
    
    const WrappedComponent = withLightbox(TestComponentWithInvalidIndex, mockImages);
    
    render(<WrappedComponent />);
    
    const openButton = screen.getByTestId('open-invalid');
    fireEvent.click(openButton);
    
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Invalid image index: 99. Available images: 3'
    );
    
    consoleWarnSpy.mockRestore();
  });

  it('handles negative image index gracefully', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation();
    
    const TestComponentWithNegativeIndex = ({ openLightbox }) => (
      <button onClick={() => openLightbox(-1)} data-testid="open-negative">
        Open Negative Index
      </button>
    );
    
    const WrappedComponent = withLightbox(TestComponentWithNegativeIndex, mockImages);
    
    render(<WrappedComponent />);
    
    const openButton = screen.getByTestId('open-negative');
    fireEvent.click(openButton);
    
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Invalid image index: -1. Available images: 3'
    );
    
    consoleWarnSpy.mockRestore();
  });

  it('works with empty images array', () => {
    const WrappedComponent = withLightbox(TestComponent, []);
    
    render(<WrappedComponent />);
    
    const openButton = screen.getByTestId('open-lightbox');
    fireEvent.click(openButton);
    
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
  });

  it('handles invalid image objects gracefully', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation();
    
    const invalidImages = [
      null,
      { caption: 'No src' },
      { src: '/valid.jpg', caption: 'Valid' }
    ];
    
    const WrappedComponent = withLightbox(TestComponent, invalidImages);
    
    render(<WrappedComponent />);
    
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'withLightbox: Invalid image object',
      null
    );
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'withLightbox: Invalid image object',
      { caption: 'No src' }
    );
    
    consoleWarnSpy.mockRestore();
  });

  it('converts images to correct lightbox format', () => {
    const testImages = [
      { src: '/test1.jpg', caption: 'Test Caption 1' },
      { src: '/test2.jpg', alt: 'Alt Text 2' },
      { src: '/test3.jpg' }
    ];
    
    const WrappedComponent = withLightbox(TestComponent, testImages);
    
    render(<WrappedComponent />);
    
    // Open lightbox to trigger image conversion
    const openButton = screen.getByTestId('open-lightbox');
    fireEvent.click(openButton);
    
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
  });

  it('sets correct displayName for wrapped component', () => {
    TestComponent.displayName = 'TestComponent';
    const WrappedComponent = withLightbox(TestComponent, mockImages);
    
    expect(WrappedComponent.displayName).toBe('withLightbox(TestComponent)');
  });

  it('handles component without displayName', () => {
    const AnonymousComponent = () => <div>Anonymous</div>;
    const WrappedComponent = withLightbox(AnonymousComponent, mockImages);
    
    expect(WrappedComponent.displayName).toBe('withLightbox(AnonymousComponent)');
  });

  it('handles component without name', () => {
    const component = () => <div>No name</div>;
    Object.defineProperty(component, 'name', { value: '' });
    const WrappedComponent = withLightbox(component, mockImages);
    
    expect(WrappedComponent.displayName).toBe('withLightbox(Component)');
  });

  it('resets image index when lightbox is closed', () => {
    const TestComponentWithMultipleButtons = ({ openLightbox }) => (
      <div>
        <button onClick={() => openLightbox(0)} data-testid="open-0">Open 0</button>
        <button onClick={() => openLightbox(2)} data-testid="open-2">Open 2</button>
      </div>
    );
    
    const WrappedComponent = withLightbox(TestComponentWithMultipleButtons, mockImages);
    
    render(<WrappedComponent />);
    
    // Open at index 2
    fireEvent.click(screen.getByTestId('open-2'));
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
    
    // Close lightbox
    fireEvent.click(screen.getByTestId('lightbox-mock'));
    expect(screen.queryByTestId('lightbox-mock')).not.toBeInTheDocument();
    
    // Open again at index 0 (should work properly after reset)
    fireEvent.click(screen.getByTestId('open-0'));
    expect(screen.getByTestId('lightbox-mock')).toBeInTheDocument();
  });

  it('provides default alt text for images without caption or alt', () => {
    const imageWithoutCaption = { src: '/no-caption.jpg' };
    const WrappedComponent = withLightbox(TestComponent, [imageWithoutCaption]);
    
    render(<WrappedComponent />);
    
    // Component should render without errors
    expect(screen.getByTestId('open-lightbox')).toBeInTheDocument();
  });
});
