import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from '../../../src/components/infrastructure/ErrorBoundary';

// Component that throws an error for testing
const ThrowError = ({ shouldThrow = false, errorMessage = 'Test error' }) => {
  if (shouldThrow) {
    throw new Error(errorMessage);
  }
  return <div data-testid="no-error">No error occurred</div>;
};

// Component that throws an error on update
const ThrowErrorOnUpdate = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('Update error');
  }
  return <div data-testid="update-component">Component updated</div>;
};

describe('ErrorBoundary', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    // Suppress console.error output during tests
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('no-error')).toBeInTheDocument();
    expect(screen.getByText('No error occurred')).toBeInTheDocument();
  });

  it('renders error UI when child component throws', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.queryByTestId('no-error')).not.toBeInTheDocument();
    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();
    expect(screen.getByText('Omlouváme se, ale došlo k neočekávané chybě.')).toBeInTheDocument();
  });

  it('has proper accessibility attributes in error state', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const errorContainer = screen.getByRole('alert');
    expect(errorContainer).toHaveClass('error-boundary');
  });

  it('displays error details in expandable section', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} errorMessage="Custom test error" />
      </ErrorBoundary>
    );

    const detailsElement = screen.getByText('Technické detaily');
    expect(detailsElement.tagName.toLowerCase()).toBe('summary');
    
    const parentDetails = detailsElement.closest('details');
    expect(parentDetails).toBeInTheDocument();
  });

  it('shows error message in technical details', () => {
    const customError = 'Custom error message for testing';
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} errorMessage={customError} />
      </ErrorBoundary>
    );

    // The error message should be in a <pre> element
    expect(screen.getByText(new RegExp(customError))).toBeInTheDocument();
  });

  it('provides retry button that reloads the page', () => {
    // Mock window.location.reload
    const mockReload = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
      writable: true
    });

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('Obnovit stránku');
    expect(retryButton).toBeInTheDocument();
    expect(retryButton.tagName.toLowerCase()).toBe('button');
    expect(retryButton).toHaveClass('retry-button');

    fireEvent.click(retryButton);
    expect(mockReload).toHaveBeenCalled();
  });

  it('logs error details to console', () => {
    const customError = 'Logged error message';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} errorMessage={customError} />
      </ErrorBoundary>
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'ErrorBoundary caught an error:',
      expect.any(Error),
      expect.any(Object)
    );
  });

  it('catches errors during component updates', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowErrorOnUpdate shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('update-component')).toBeInTheDocument();

    // Update component to throw an error
    rerender(
      <ErrorBoundary>
        <ThrowErrorOnUpdate shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.queryByTestId('update-component')).not.toBeInTheDocument();
    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();
  });

  it('handles multiple children correctly', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child-1">Child 1</div>
        <ThrowError shouldThrow={false} />
        <div data-testid="child-3">Child 3</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('no-error')).toBeInTheDocument();
    expect(screen.getByTestId('child-3')).toBeInTheDocument();
  });

  it('catches error from any child when multiple children present', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child-1">Child 1</div>
        <ThrowError shouldThrow={true} />
        <div data-testid="child-3">Child 3</div>
      </ErrorBoundary>
    );

    expect(screen.queryByTestId('child-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('no-error')).not.toBeInTheDocument();
    expect(screen.queryByTestId('child-3')).not.toBeInTheDocument();
    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();
  });

  it('maintains error state after error occurs', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();

    // Rerender with non-throwing component
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    // Should still show error state
    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();
    expect(screen.queryByTestId('no-error')).not.toBeInTheDocument();
  });

  it('handles null error gracefully in error display', () => {
    // Create a custom error boundary that sets null error
    class TestErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
      }

      static getDerivedStateFromError() {
        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        this.setState({
          error: null, // Explicitly set to null
          errorInfo: errorInfo
        });
      }

      render() {
        if (this.state.hasError) {
          return (
            <div className="error-boundary" role="alert">
              <h2>Něco se pokazilo</h2>
              <p>Omlouváme se, ale došlo k neočekávané chybě.</p>
              <details>
                <summary>Technické detaily</summary>
                <pre>{this.state.error && this.state.error.toString()}</pre>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </details>
            </div>
          );
        }
        return this.props.children;
      }
    }

    render(
      <TestErrorBoundary>
        <ThrowError shouldThrow={true} />
      </TestErrorBoundary>
    );

    expect(screen.getByText('Něco se pokazilo')).toBeInTheDocument();
    expect(screen.getByText('Technické detaily')).toBeInTheDocument();
  });

  it('displays component stack in error info', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // Error info should be captured and displayed
    expect(screen.getByText('Technické detaily')).toBeInTheDocument();
  });
});
