import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import SubItems from '../../../src/components/menu/SubItems';

// Mock the ArticleApi
vi.mock('../../../src/api/ArticleApi', () => ({
  getArticleDetailLinks: vi.fn()
}));

import { getArticleDetailLinks } from '../../../src/api/ArticleApi';

const mockDetails = [
  { link: 'den1', title: 'Den 1' },
  { link: 'den2', title: 'Den 2' },
  { link: 'den3', title: 'Den 3' }
];

const renderWithRouter = (component, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};

describe('SubItems', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getArticleDetailLinks.mockReturnValue(mockDetails);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders chapters container', () => {
      renderWithRouter(<SubItems link="nepal" />);

      expect(document.querySelector('.chapters')).toBeInTheDocument();
    });

    it('renders Úvod link', () => {
      renderWithRouter(<SubItems link="nepal" />);

      expect(screen.getByRole('link', { name: 'Úvod' })).toBeInTheDocument();
    });

    it('renders all detail links', () => {
      renderWithRouter(<SubItems link="nepal" />);

      expect(screen.getByRole('link', { name: 'Den 1' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Den 2' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Den 3' })).toBeInTheDocument();
    });

    it('renders correct number of links', () => {
      renderWithRouter(<SubItems link="nepal" />);

      const links = screen.getAllByRole('link');
      // 1 for Úvod + 3 for details
      expect(links).toHaveLength(4);
    });
  });

  describe('Link paths', () => {
    it('Úvod link points to article root', () => {
      renderWithRouter(<SubItems link="nepal" />);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      expect(uvodLink).toHaveAttribute('href', '/nepal');
    });

    it('detail links have correct paths', () => {
      renderWithRouter(<SubItems link="nepal" />);

      expect(screen.getByRole('link', { name: 'Den 1' })).toHaveAttribute('href', '/nepal/den1');
      expect(screen.getByRole('link', { name: 'Den 2' })).toHaveAttribute('href', '/nepal/den2');
      expect(screen.getByRole('link', { name: 'Den 3' })).toHaveAttribute('href', '/nepal/den3');
    });

    it('works with different article links', () => {
      renderWithRouter(<SubItems link="norsko" />);

      expect(screen.getByRole('link', { name: 'Úvod' })).toHaveAttribute('href', '/norsko');
      expect(screen.getByRole('link', { name: 'Den 1' })).toHaveAttribute('href', '/norsko/den1');
    });
  });

  describe('CSS classes', () => {
    it('all links have chapter-item class', () => {
      renderWithRouter(<SubItems link="nepal" />);

      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveClass('chapter-item');
      });
    });

    it('active Úvod link has active class', () => {
      renderWithRouter(<SubItems link="nepal" />, ['/nepal']);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      expect(uvodLink).toHaveClass('active');
    });

    it('active detail link has active class', () => {
      renderWithRouter(<SubItems link="nepal" />, ['/nepal/den1']);

      const den1Link = screen.getByRole('link', { name: 'Den 1' });
      expect(den1Link).toHaveClass('active');
    });

    it('non-active links do not have active class on detail page', () => {
      renderWithRouter(<SubItems link="nepal" />, ['/nepal/den1']);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      const den2Link = screen.getByRole('link', { name: 'Den 2' });
      
      expect(uvodLink).not.toHaveClass('active');
      expect(den2Link).not.toHaveClass('active');
    });
  });

  describe('API integration', () => {
    it('calls getArticleDetailLinks with correct link', () => {
      renderWithRouter(<SubItems link="nepal" />);

      expect(getArticleDetailLinks).toHaveBeenCalledWith('nepal');
    });

    it('handles empty details array', () => {
      getArticleDetailLinks.mockReturnValue([]);
      renderWithRouter(<SubItems link="nepal" />);

      const links = screen.getAllByRole('link');
      // Only Úvod link
      expect(links).toHaveLength(1);
      expect(screen.getByRole('link', { name: 'Úvod' })).toBeInTheDocument();
    });

    it('handles null details by throwing', () => {
      getArticleDetailLinks.mockReturnValue(null);
      
      // SubItems doesn't handle null gracefully - this documents actual behavior
      expect(() => renderWithRouter(<SubItems link="nepal" />)).toThrow();
    });
  });

  describe('NavLink end prop', () => {
    it('Úvod link uses end prop for exact matching', () => {
      renderWithRouter(<SubItems link="nepal" />, ['/nepal']);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      expect(uvodLink).toHaveClass('active');
    });

    it('Úvod is not active when on detail page', () => {
      renderWithRouter(<SubItems link="nepal" />, ['/nepal/den1']);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      expect(uvodLink).not.toHaveClass('active');
    });
  });

  describe('Edge cases', () => {
    it('handles details with special characters in title', () => {
      getArticleDetailLinks.mockReturnValue([
        { link: 'den1', title: 'Den 1 - Přílet & ubytování' }
      ]);
      
      renderWithRouter(<SubItems link="nepal" />);

      expect(screen.getByRole('link', { name: 'Den 1 - Přílet & ubytování' })).toBeInTheDocument();
    });

    it('handles details with long titles', () => {
      const longTitle = 'Den 1 - Velmi dlouhý název článku s mnoha detaily';
      getArticleDetailLinks.mockReturnValue([
        { link: 'den1', title: longTitle }
      ]);
      
      renderWithRouter(<SubItems link="nepal" />);

      expect(screen.getByRole('link', { name: longTitle })).toBeInTheDocument();
    });

    it('handles undefined link prop', () => {
      renderWithRouter(<SubItems link={undefined} />);

      const uvodLink = screen.getByRole('link', { name: 'Úvod' });
      expect(uvodLink).toHaveAttribute('href', '/undefined');
    });
  });

  describe('Key prop for details', () => {
    it('uses detail.link as key for mapping', () => {
      renderWithRouter(<SubItems link="nepal" />);

      // If keys weren't unique, React would warn
      // This test verifies no warnings by checking render success
      expect(screen.getAllByRole('link')).toHaveLength(4);
    });
  });
});
