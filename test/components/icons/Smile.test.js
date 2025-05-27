import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Smile from '../../../src/components/icons/Smile';

describe('Smile', () => {
    describe('Component Rendering', () => {
        it('should render SVG element', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toBeInTheDocument();
            expect(svgElement.tagName).toBe('svg');
        });

        it('should render with default props', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '16');
            expect(svgElement).toHaveAttribute('height', '16');
            expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        });

        it('should render with custom width and height', () => {
            render(<Smile width="32" height="32" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '32');
            expect(svgElement).toHaveAttribute('height', '32');
        });

        it('should render with numeric width and height', () => {
            render(<Smile width={24} height={24} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '24');
            expect(svgElement).toHaveAttribute('height', '24');
        });
    });

    describe('SVG Attributes', () => {
        it('should have correct viewBox', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        });

        it('should have fill set to none', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('fill', 'none');
        });

        it('should have correct stroke properties', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('stroke', 'currentColor');
            expect(svgElement).toHaveAttribute('stroke-width', '2');
            expect(svgElement).toHaveAttribute('stroke-linecap', 'round');
            expect(svgElement).toHaveAttribute('stroke-linejoin', 'round');
        });
    });

    describe('SVG Paths', () => {
        it('should contain circle path for face', () => {
            render(<Smile />);
            
            const circleElement = screen.getByRole('img', { hidden: true }).querySelector('circle');
            expect(circleElement).toBeInTheDocument();
            expect(circleElement).toHaveAttribute('cx', '12');
            expect(circleElement).toHaveAttribute('cy', '12');
            expect(circleElement).toHaveAttribute('r', '10');
        });        it('should contain path for smile', () => {
            const { container } = render(<Smile />);
            
            const pathElements = container.querySelectorAll('path');
            expect(pathElements).toHaveLength(2);
            
            // Eyes path
            expect(pathElements[0]).toHaveAttribute('d', 'm9 9 1.5 1.5L12 9l1.5 1.5L15 9');
            
            // Smile path
            expect(pathElements[1]).toHaveAttribute('d', 'm9 15a3 3 0 0 0 6 0');
        });        it('should contain path elements for eyes', () => {
            const { container } = render(<Smile />);
            
            const pathElements = container.querySelectorAll('path');
            expect(pathElements).toHaveLength(2);
            
            // Eyes are now represented as a path, not line elements
            expect(pathElements[0]).toHaveAttribute('d', 'm9 9 1.5 1.5L12 9l1.5 1.5L15 9');
        });
    });

    describe('Props Handling', () => {
        it('should handle string width and height', () => {
            render(<Smile width="48" height="48" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '48');
            expect(svgElement).toHaveAttribute('height', '48');
        });

        it('should handle undefined width and height', () => {
            render(<Smile width={undefined} height={undefined} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '16');
            expect(svgElement).toHaveAttribute('height', '16');
        });

        it('should handle null width and height', () => {
            render(<Smile width={null} height={null} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '16');
            expect(svgElement).toHaveAttribute('height', '16');
        });

        it('should handle zero width and height', () => {
            render(<Smile width={0} height={0} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '0');
            expect(svgElement).toHaveAttribute('height', '0');
        });

        it('should handle other props passed through', () => {
            render(<Smile className="custom-smile" data-testid="smile-icon" />);
            
            const svgElement = screen.getByTestId('smile-icon');
            expect(svgElement).toHaveClass('custom-smile');
        });
    });

    describe('Accessibility', () => {
        it('should be accessible to screen readers', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toBeInTheDocument();
        });

        it('should support aria-label for better accessibility', () => {
            render(<Smile aria-label="Happy face icon" />);
            
            const svgElement = screen.getByLabelText('Happy face icon');
            expect(svgElement).toBeInTheDocument();
        });

        it('should support title for tooltip', () => {
            render(<Smile title="Smile icon" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('title', 'Smile icon');
        });

        it('should be visible by default', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toBeVisible();
        });
    });

    describe('CSS and Styling', () => {
        it('should accept custom className', () => {
            render(<Smile className="my-icon" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveClass('my-icon');
        });

        it('should accept custom style', () => {
            const customStyle = { color: 'red', backgroundColor: 'blue' };
            render(<Smile style={customStyle} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveStyle('color: red');
            expect(svgElement).toHaveStyle('background-color: blue');
        });

        it('should use currentColor for stroke', () => {
            render(<Smile />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('stroke', 'currentColor');
        });
    });

    describe('Component Structure', () => {
        it('should have correct number of child elements', () => {
            const { container } = render(<Smile />);
            
            const svgElement = container.querySelector('svg');
            expect(svgElement.children).toHaveLength(3); // 1 circle + 1 path + 2 lines = 4, but path contains 2 elements
        });

        it('should maintain consistent structure', () => {
            const { container } = render(<Smile />);
            
            const svgElement = container.querySelector('svg');
            const circle = svgElement.querySelector('circle');
            const path = svgElement.querySelector('path');
            const lines = svgElement.querySelectorAll('line');
            
            expect(circle).toBeInTheDocument();
            expect(path).toBeInTheDocument();
            expect(lines).toHaveLength(2);
        });
    });

    describe('Props Spreading', () => {
        it('should spread additional props to SVG element', () => {
            render(<Smile id="smile-svg" data-custom="test" role="img" />);
            
            const svgElement = document.getElementById('smile-svg');
            expect(svgElement).toBeInTheDocument();
            expect(svgElement).toHaveAttribute('data-custom', 'test');
            expect(svgElement).toHaveAttribute('role', 'img');
        });

        it('should handle event handlers', () => {
            const handleClick = vi.fn();
            render(<Smile onClick={handleClick} />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            svgElement.click();
            
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('Different Sizes', () => {
        it('should render correctly with small size', () => {
            render(<Smile width="8" height="8" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '8');
            expect(svgElement).toHaveAttribute('height', '8');
            expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        });

        it('should render correctly with large size', () => {
            render(<Smile width="64" height="64" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '64');
            expect(svgElement).toHaveAttribute('height', '64');
            expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
        });

        it('should handle non-square dimensions', () => {
            render(<Smile width="20" height="30" />);
            
            const svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '20');
            expect(svgElement).toHaveAttribute('height', '30');
        });
    });

    describe('Performance', () => {
        it('should render efficiently on multiple instances', () => {
            render(
                <div>
                    <Smile />
                    <Smile />
                    <Smile />
                </div>
            );
            
            const svgElements = screen.getAllByRole('img', { hidden: true });
            expect(svgElements).toHaveLength(3);
            
            svgElements.forEach(svg => {
                expect(svg).toBeInTheDocument();
                expect(svg.tagName).toBe('svg');
            });
        });

        it('should re-render when props change', () => {
            const { rerender } = render(<Smile width="16" height="16" />);
            
            let svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '16');
            
            rerender(<Smile width="32" height="32" />);
            
            svgElement = screen.getByRole('img', { hidden: true });
            expect(svgElement).toHaveAttribute('width', '32');
        });
    });
});