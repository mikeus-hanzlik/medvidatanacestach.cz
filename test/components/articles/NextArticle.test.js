import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import NextArticle from '../../../src/components/articles/NextArticle';

// Mock the ArticleApi
vi.mock('../../../src/api/ArticleApi', () => ({
  getNextArticleDetail: vi.fn()
}));

import { getNextArticleDetail } from '../../../src/api/ArticleApi';

const renderWithRouter = (component) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};

describe('NextArticle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders navigation link when next article exists', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      expect(screen.getByText('Číst dál')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders null when articleId is missing', () => {
      const { container } = renderWithRouter(
        <NextArticle articleId={null} detailId="den1" />
      );

      expect(container.firstChild).toBeNull();
    });

    it('renders null when detailId is missing', () => {
      const { container } = renderWithRouter(
        <NextArticle articleId="nepal" detailId={null} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('renders null when both props are missing', () => {
      const { container } = renderWithRouter(
        <NextArticle articleId={undefined} detailId={undefined} />
      );

      expect(container.firstChild).toBeNull();
    });

    it('renders null when getNextArticleDetail returns null', () => {
      getNextArticleDetail.mockReturnValue(null);

      const { container } = renderWithRouter(
        <NextArticle articleId="nepal" detailId="den15" />
      );

      expect(container.firstChild).toBeNull();
    });

    it('renders null when getNextArticleDetail returns undefined', () => {
      getNextArticleDetail.mockReturnValue(undefined);

      const { container } = renderWithRouter(
        <NextArticle articleId="nepal" detailId="den1" />
      );

      expect(container.firstChild).toBeNull();
    });
  });

  describe('Link attributes', () => {
    it('generates correct link path', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den3', title: 'Den 3' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den2" />);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/nepal/den3');
    });

    it('has correct aria-label with article title', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2 - Výlet do hor' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-label', 'Pokračovat na Den 2 - Výlet do hor');
    });

    it('has nav-link class', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      const link = screen.getByRole('link');
      expect(link).toHaveClass('nav-link');
    });
  });

  describe('Accessibility', () => {
    it('has navigation role', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('has correct aria-label on navigation', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Následující článek');
    });

    it('has article-navigation class', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('article-navigation');
    });
  });

  describe('Error handling', () => {
    it('renders null and logs error when getNextArticleDetail throws', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      getNextArticleDetail.mockImplementation(() => {
        throw new Error('API Error');
      });

      const { container } = renderWithRouter(
        <NextArticle articleId="nepal" detailId="den1" />
      );

      expect(container.firstChild).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error in NextArticle component:',
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    });
  });

  describe('API integration', () => {
    it('calls getNextArticleDetail with correct parameters', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      expect(getNextArticleDetail).toHaveBeenCalledWith('nepal', 'den1');
    });

    it('does not call API when props are missing', () => {
      renderWithRouter(<NextArticle articleId={null} detailId="den1" />);

      expect(getNextArticleDetail).not.toHaveBeenCalled();
    });
  });

  describe('CSS classes', () => {
    it('has readMore class on paragraph', () => {
      getNextArticleDetail.mockReturnValue({ link: 'den2', title: 'Den 2' });

      renderWithRouter(<NextArticle articleId="nepal" detailId="den1" />);

      const paragraph = screen.getByText('Číst dál').closest('p');
      expect(paragraph).toHaveClass('readMore');
    });
  });
});
