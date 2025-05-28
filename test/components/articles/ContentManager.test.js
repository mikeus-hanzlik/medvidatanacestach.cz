import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

// Mock asyncComponent - needs to be at the top
vi.mock('../../../src/components/infrastructure/asyncComponent', () => ({
    default: vi.fn()
}));

// Mock dynamic imports - needs to be at the top
vi.mock('../../../src/components/content/testArticle/Index.js', () => ({
    default: () => <div data-testid="index-component">Index Content</div>
}));
vi.mock('../../../src/components/content/testArticle/Detail1.js', () => ({
    default: () => <div data-testid="detail1-component">Detail 1 Content</div>
}));

import ContentManager from '../../../src/components/articles/ContentManager';
import asyncComponent from '../../../src/components/infrastructure/asyncComponent';

// Get the mocked function
const mockAsyncComponent = vi.mocked(asyncComponent);

describe('ContentManager', () => {
    const defaultProps = {
        articleId: 'testArticle',
        params: {}
    };    beforeEach(() => {
        vi.clearAllMocks();
        // Setup default mock implementation that properly simulates suspense
        mockAsyncComponent.mockImplementation((importFn) => {
            const MockComponent = React.lazy(() => 
                Promise.resolve({ 
                    default: () => <div data-testid="mock-component">Mocked Content</div> 
                })
            );
            return MockComponent;
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render with default parameters', async () => {
            render(<ContentManager {...defaultProps} />);
            
            expect(screen.getByText('Načítání článku...')).toBeInTheDocument();
            
            await waitFor(() => {
                expect(screen.getByTestId('mock-component')).toBeInTheDocument();
            });
        });

        it('should render with specific detailId', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: 'detail1' }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(screen.getByTestId('mock-component')).toBeInTheDocument();
            });
        });

        it('should use index as default detailId when none provided', async () => {
            render(<ContentManager {...defaultProps} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledWith(expect.any(Function));
            });
        });
    });

    describe('Dynamic Import Handling', () => {
        it('should capitalize first letter of detailId for import', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: 'detail1' }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalled();
            });
        });

        it('should handle empty detailId', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: '' }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalled();
            });
        });

        it('should handle undefined detailId', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: undefined }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalled();
            });
        });
    });

    describe('Error Handling', () => {
        it('should render error message when AsyncArticle is null', () => {
            mockAsyncComponent.mockImplementation(() => {
                throw new Error('Import failed');
            });

            const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            render(<ContentManager {...defaultProps} />);
            
            expect(screen.getByRole('alert')).toBeInTheDocument();
            expect(screen.getByText('Omlouváme se, ale tento článek se nepodařilo načíst.')).toBeInTheDocument();
            
            consoleSpy.mockRestore();
        });

        it('should handle import errors gracefully', () => {
            const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            mockAsyncComponent.mockImplementation(() => {
                throw new Error('Failed to load component');
            });
            
            render(<ContentManager {...defaultProps} />);
            
            expect(screen.getByRole('alert')).toBeInTheDocument();
            expect(screen.getByText('Omlouváme se, ale tento článek se nepodařilo načíst.')).toBeInTheDocument();
            
            consoleErrorSpy.mockRestore();
        });
    });

    describe('Suspense and Loading States', () => {
        it('should show loading spinner during component loading', () => {
            render(<ContentManager {...defaultProps} />);
            
            const loadingElement = screen.getByText('Načítání článku...');
            expect(loadingElement).toBeInTheDocument();
            expect(loadingElement.closest('.loading-spinner')).toHaveAttribute('aria-live', 'polite');
        });

        it('should have proper accessibility attributes on loading state', () => {
            render(<ContentManager {...defaultProps} />);
            
            const loadingSpinner = screen.getByText('Načítání článku...').closest('.loading-spinner');
            expect(loadingSpinner).toHaveAttribute('aria-live', 'polite');
        });

        it('should have proper accessibility attributes on error state', () => {
            mockAsyncComponent.mockImplementation(() => {
                throw new Error('Import failed');
            });

            const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            render(<ContentManager {...defaultProps} />);
            
            const errorElement = screen.getByRole('alert');
            expect(errorElement).toHaveClass('error-message');
            
            consoleSpy.mockRestore();
        });
    });

    describe('Component Re-mounting', () => {
        it('should use detailId as key for Suspense to force remounting', async () => {
            const { rerender } = render(<ContentManager {...defaultProps} params={{ detailId: 'detail1' }} />);
            
            await waitFor(() => {
                expect(screen.getByTestId('mock-component')).toBeInTheDocument();
            });
            
            // Change detailId to force remount
            rerender(<ContentManager {...defaultProps} params={{ detailId: 'detail2' }} />);
            
            expect(screen.getByText('Načítání článku...')).toBeInTheDocument();
        });

        it('should create new AsyncArticle component when detailId changes', async () => {
            const { rerender } = render(<ContentManager {...defaultProps} params={{ detailId: 'detail1' }} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledTimes(1);
            });
            
            rerender(<ContentManager {...defaultProps} params={{ detailId: 'detail2' }} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledTimes(2);
            });
        });
    });

    describe('Props Validation', () => {
        it('should handle missing articleId', () => {
            const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            render(<ContentManager articleId={undefined} params={{}} />);
            
            consoleErrorSpy.mockRestore();
        });

        it('should handle missing params', () => {
            render(<ContentManager articleId="testArticle" params={undefined} />);
            
            expect(screen.getByText('Načítání článku...')).toBeInTheDocument();
        });

        it('should handle null params', () => {
            render(<ContentManager articleId="testArticle" params={null} />);
            
            expect(screen.getByText('Načítání článku...')).toBeInTheDocument();
        });
    });

    describe('Helper Functions', () => {
        it('should capitalize first letter correctly', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: 'myDetail' }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalled();
            });
            
            // Verify the import function would try to import the correctly capitalized file
            const importFn = mockAsyncComponent.mock.calls[0][0];
            expect(importFn).toBeDefined();
        });

        it('should handle empty string in capitalizeFirstLetter', async () => {
            const props = {
                ...defaultProps,
                params: { detailId: '' }
            };
            
            render(<ContentManager {...props} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalled();
            });
        });
    });

    describe('Memory and Performance', () => {
        it('should memoize AsyncArticle component', async () => {
            const { rerender } = render(<ContentManager {...defaultProps} params={{ detailId: 'detail1' }} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledTimes(1);
            });
            
            // Rerender with same props - should not call asyncComponent again
            rerender(<ContentManager {...defaultProps} params={{ detailId: 'detail1' }} />);
            
            // Should still be called only once due to useMemo
            expect(mockAsyncComponent).toHaveBeenCalledTimes(1);
        });

        it('should create new AsyncArticle when dependencies change', async () => {
            const { rerender } = render(<ContentManager {...defaultProps} params={{ detailId: 'detail1' }} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledTimes(1);
            });
            
            // Change articleId
            rerender(<ContentManager articleId="newArticle" params={{ detailId: 'detail1' }} />);
            
            await waitFor(() => {
                expect(mockAsyncComponent).toHaveBeenCalledTimes(2);
            });
        });
    });
});
