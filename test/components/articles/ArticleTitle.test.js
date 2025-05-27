import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ArticleTitle from '../../../src/components/articles/ArticleTitle';

describe('ArticleTitle', () => {
    const defaultProps = {
        title: 'Test Article Title',
        date: '2024-01-15'
    };

    describe('Component Rendering', () => {
        it('should render with title and date', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('2024-01-15');
        });

        it('should render with custom CSS class', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const container = screen.getByRole('heading', { level: 1 }).closest('.articleTitle');
            expect(container).toBeInTheDocument();
            expect(container).toHaveClass('articleTitle');
        });

        it('should render h1 for title', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            expect(titleElement.tagName).toBe('H1');
            expect(titleElement).toHaveTextContent('Test Article Title');
        });

        it('should render h2 for date', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const dateElement = screen.getByRole('heading', { level: 2 });
            expect(dateElement.tagName).toBe('H2');
            expect(dateElement).toHaveTextContent('2024-01-15');
        });
    });

    describe('Props Handling', () => {
        it('should render with empty title', () => {
            render(<ArticleTitle title="" date={defaultProps.date} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            expect(titleElement).toHaveTextContent('');
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('2024-01-15');
        });

        it('should render with empty date', () => {
            render(<ArticleTitle title={defaultProps.title} date="" />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
            const dateElement = screen.getByRole('heading', { level: 2 });
            expect(dateElement).toHaveTextContent('');
        });

        it('should render with undefined title', () => {
            render(<ArticleTitle title={undefined} date={defaultProps.date} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            expect(titleElement).toBeInTheDocument();
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('2024-01-15');
        });

        it('should render with undefined date', () => {
            render(<ArticleTitle title={defaultProps.title} date={undefined} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
            const dateElement = screen.getByRole('heading', { level: 2 });
            expect(dateElement).toBeInTheDocument();
        });

        it('should render with null title', () => {
            render(<ArticleTitle title={null} date={defaultProps.date} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            expect(titleElement).toBeInTheDocument();
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('2024-01-15');
        });

        it('should render with null date', () => {
            render(<ArticleTitle title={defaultProps.title} date={null} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
            const dateElement = screen.getByRole('heading', { level: 2 });
            expect(dateElement).toBeInTheDocument();
        });
    });

    describe('Content Variations', () => {
        it('should render with long title', () => {
            const longTitle = 'This is a very long article title that might span multiple lines and should still render correctly';
            render(<ArticleTitle title={longTitle} date={defaultProps.date} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(longTitle);
        });

        it('should render with special characters in title', () => {
            const specialTitle = 'Article with special characters: àáâãäåæçèéêëìíîïñòóôõöøùúûüý & symbols!';
            render(<ArticleTitle title={specialTitle} date={defaultProps.date} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(specialTitle);
        });

        it('should render with different date formats', () => {
            const testCases = [
                '2024-01-15',
                '15.1.2024',
                'January 15, 2024',
                '15 leden 2024',
                '2024/01/15'
            ];

            testCases.forEach(dateFormat => {
                const { unmount } = render(<ArticleTitle title={defaultProps.title} date={dateFormat} />);
                
                expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(dateFormat);
                
                unmount();
            });
        });

        it('should render with numeric values', () => {
            render(<ArticleTitle title={123} date={456} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('123');
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('456');
        });
    });

    describe('Accessibility', () => {
        it('should have proper heading hierarchy', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const h1 = screen.getByRole('heading', { level: 1 });
            const h2 = screen.getByRole('heading', { level: 2 });
            
            expect(h1).toBeInTheDocument();
            expect(h2).toBeInTheDocument();
            
            // h1 should come before h2 in DOM order
            const headings = screen.getAllByRole('heading');
            expect(headings[0]).toBe(h1);
            expect(headings[1]).toBe(h2);
        });

        it('should be accessible with screen readers', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            const dateElement = screen.getByRole('heading', { level: 2 });
            
            expect(titleElement).toBeVisible();
            expect(dateElement).toBeVisible();
        });
    });

    describe('CSS Classes', () => {
        it('should have articleTitle class on container', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const container = screen.getByRole('heading', { level: 1 }).closest('div');
            expect(container).toHaveClass('articleTitle');
        });

        it('should have proper DOM structure', () => {
            render(<ArticleTitle {...defaultProps} />);
            
            const container = screen.getByRole('heading', { level: 1 }).closest('div');
            const h1 = container.querySelector('h1');
            const h2 = container.querySelector('h2');
            
            expect(container.children).toHaveLength(2);
            expect(h1).toBeInTheDocument();
            expect(h2).toBeInTheDocument();
        });
    });

    describe('Component Behavior', () => {
        it('should re-render when props change', () => {
            const { rerender } = render(<ArticleTitle {...defaultProps} />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Article Title');
            
            rerender(<ArticleTitle title="Updated Title" date="2024-02-20" />);
            
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Updated Title');
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('2024-02-20');
        });

        it('should maintain structure with prop updates', () => {
            const { rerender } = render(<ArticleTitle {...defaultProps} />);
            
            const container = screen.getByRole('heading', { level: 1 }).closest('div');
            expect(container).toHaveClass('articleTitle');
            
            rerender(<ArticleTitle title="New Title" date="New Date" />);
            
            const updatedContainer = screen.getByRole('heading', { level: 1 }).closest('div');
            expect(updatedContainer).toHaveClass('articleTitle');
            expect(updatedContainer.children).toHaveLength(2);
        });
    });

    describe('Edge Cases', () => {
        it('should handle boolean props', () => {
            render(<ArticleTitle title={true} date={false} />);
            
            // React converts boolean to string
            const titleElement = screen.getByRole('heading', { level: 1 });
            const dateElement = screen.getByRole('heading', { level: 2 });
            
            expect(titleElement).toBeInTheDocument();
            expect(dateElement).toBeInTheDocument();
        });

        it('should handle object props gracefully', () => {
            const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            expect(() => {
                render(<ArticleTitle title={{ name: 'title' }} date={{ value: 'date' }} />);
            }).not.toThrow();
            
            consoleSpy.mockRestore();
        });

        it('should handle array props', () => {
            render(<ArticleTitle title={['Title', 'Part']} date={['2024', '01', '15']} />);
            
            const titleElement = screen.getByRole('heading', { level: 1 });
            const dateElement = screen.getByRole('heading', { level: 2 });
            
            expect(titleElement).toBeInTheDocument();
            expect(dateElement).toBeInTheDocument();
        });
    });
});
