import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NewArticleTag from '../../../src/components/menu/NewArticleTag';

describe('NewArticleTag', () => {
    describe('Component Rendering', () => {
        it('should render tag when isNewArticle is true', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement).toBeInTheDocument();
            expect(tagElement).toHaveClass('newArticleTag');
        });

        it('should not render when isNewArticle is false', () => {
            render(<NewArticleTag isNewArticle={false} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should not render when isNewArticle is undefined', () => {
            render(<NewArticleTag isNewArticle={undefined} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should not render when isNewArticle is null', () => {
            render(<NewArticleTag isNewArticle={null} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should not render when no props are provided', () => {
            render(<NewArticleTag />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });
    });

    describe('CSS Classes', () => {
        it('should have newArticleTag class when rendered', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement).toHaveClass('newArticleTag');
            expect(tagElement.tagName).toBe('DIV');
        });

        it('should render as div element', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement.tagName).toBe('DIV');
        });
    });

    describe('Content and Text', () => {
        it('should display "New" text', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should display exact text content', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement.textContent).toBe('New');
        });
    });

    describe('Boolean Prop Handling', () => {
        it('should render with boolean true', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should not render with boolean false', () => {
            render(<NewArticleTag isNewArticle={false} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should render with truthy string', () => {
            render(<NewArticleTag isNewArticle="true" />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should render with truthy number', () => {
            render(<NewArticleTag isNewArticle={1} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should not render with falsy string', () => {
            render(<NewArticleTag isNewArticle="" />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should not render with falsy number', () => {
            render(<NewArticleTag isNewArticle={0} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should render with truthy object', () => {
            render(<NewArticleTag isNewArticle={{}} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should render with truthy array', () => {
            render(<NewArticleTag isNewArticle={[]} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });
    });

    describe('Component Behavior', () => {
        it('should re-render when prop changes from false to true', () => {
            const { rerender } = render(<NewArticleTag isNewArticle={false} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
            
            rerender(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should re-render when prop changes from true to false', () => {
            const { rerender } = render(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
            
            rerender(<NewArticleTag isNewArticle={false} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should maintain consistency across multiple renders', () => {
            const { rerender } = render(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
            
            // Re-render with same props
            rerender(<NewArticleTag isNewArticle={true} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
            expect(screen.getByText('New')).toHaveClass('newArticleTag');
        });
    });

    describe('Return Values', () => {
        it('should return null when isNewArticle is false', () => {
            const { container } = render(<NewArticleTag isNewArticle={false} />);
            
            expect(container.firstChild).toBeNull();
        });

        it('should return div element when isNewArticle is true', () => {
            const { container } = render(<NewArticleTag isNewArticle={true} />);
            
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
            expect(container.firstChild).toHaveClass('newArticleTag');
        });
    });

    describe('Accessibility', () => {
        it('should be visible when rendered', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement).toBeVisible();
        });

        it('should be accessible to screen readers', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            expect(tagElement).toBeInTheDocument();
            expect(tagElement.textContent).toBe('New');
        });

        it('could benefit from aria-label for better accessibility', () => {
            render(<NewArticleTag isNewArticle={true} />);
            
            const tagElement = screen.getByText('New');
            // Note: This component could be improved with aria-label="New article indicator"
            expect(tagElement).toBeInTheDocument();
        });
    });

    describe('Performance', () => {
        it('should render efficiently with frequent prop changes', () => {
            const { rerender } = render(<NewArticleTag isNewArticle={false} />);
            
            // Simulate frequent prop changes
            for (let i = 0; i < 10; i++) {
                rerender(<NewArticleTag isNewArticle={i % 2 === 0} />);
                
                if (i % 2 === 0) {
                    expect(screen.getByText('New')).toBeInTheDocument();
                } else {
                    expect(screen.queryByText('New')).not.toBeInTheDocument();
                }
            }
        });
    });

    describe('DOM Structure', () => {
        it('should create minimal DOM when rendered', () => {
            const { container } = render(<NewArticleTag isNewArticle={true} />);
            
            expect(container.children).toHaveLength(1);
            expect(container.firstChild.tagName).toBe('DIV');
            expect(container.firstChild.className).toBe('newArticleTag');
            expect(container.firstChild.textContent).toBe('New');
        });

        it('should create no DOM when not rendered', () => {
            const { container } = render(<NewArticleTag isNewArticle={false} />);
            
            expect(container.children).toHaveLength(0);
            expect(container.firstChild).toBeNull();
        });
    });

    describe('Edge Cases and Error Handling', () => {
        it('should handle function as prop', () => {
            const fn = () => true;
            render(<NewArticleTag isNewArticle={fn} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should handle Symbol as prop', () => {
            const symbol = Symbol('test');
            render(<NewArticleTag isNewArticle={symbol} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should handle NaN as prop', () => {
            render(<NewArticleTag isNewArticle={NaN} />);
            
            expect(screen.queryByText('New')).not.toBeInTheDocument();
        });

        it('should handle Infinity as prop', () => {
            render(<NewArticleTag isNewArticle={Infinity} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('should handle negative Infinity as prop', () => {
            render(<NewArticleTag isNewArticle={-Infinity} />);
            
            expect(screen.getByText('New')).toBeInTheDocument();
        });
    });
});
