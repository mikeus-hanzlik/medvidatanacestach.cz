import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Menu from '../../../src/components/menu/Menu';

// Mock the ArticleApi
vi.mock('../../../src/api/ArticleApi', () => ({
  getArticleList: vi.fn()
}));

import { getArticleList } from '../../../src/api/ArticleApi';

const mockArticles = [
  { link: 'nepal', title: 'Nepal', details: [], newArticle: false },
  { link: 'norsko', title: 'Norsko', details: [], newArticle: true },
  { link: 'slovinsko', title: 'Slovinsko', details: [], newArticle: false }
];

const renderWithRouter = (component, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};

describe('Menu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getArticleList.mockReturnValue(mockArticles);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Initial rendering', () => {
    it('renders navigation element', () => {
      renderWithRouter(<Menu />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders hamburger toggle button', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      expect(toggleButton).toBeInTheDocument();
    });

    it('renders O nás link when menu is expanded', () => {
      renderWithRouter(<Menu />);

      // Expand menu to access links
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      expect(screen.getByRole('link', { name: 'O nás' })).toBeInTheDocument();
    });

    it('renders all article links from API when expanded', () => {
      renderWithRouter(<Menu />);

      // Expand menu
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      expect(screen.getByRole('link', { name: 'Nepal' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Norsko' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Slovinsko' })).toBeInTheDocument();
    });

    it('renders wedding link when expanded', () => {
      renderWithRouter(<Menu />);

      // Expand menu
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const weddingLink = screen.getByRole('link', { name: 'Naše svatba' });
      expect(weddingLink).toBeInTheDocument();
      expect(weddingLink).toHaveAttribute('href', 'https://chicvintagebrides.com/fairytale-winter-wedding-slavkov-forest/');
    });

    it('wedding link opens in new tab', () => {
      renderWithRouter(<Menu />);

      // Expand menu
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const weddingLink = screen.getByRole('link', { name: 'Naše svatba' });
      expect(weddingLink).toHaveAttribute('target', '_blank');
      expect(weddingLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Menu toggle', () => {
    it('menu is collapsed by default', () => {
      renderWithRouter(<Menu />);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).not.toHaveClass('expanded');
    });

    it('expands menu when toggle button is clicked', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).toHaveClass('expanded');
    });

    it('collapses menu when toggle button is clicked twice', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);
      fireEvent.click(toggleButton);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).not.toHaveClass('expanded');
    });

    it('collapses menu when close button is clicked', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).not.toHaveClass('expanded');
    });

    it('collapses menu when a nav link is clicked', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const nepalLink = screen.getByRole('link', { name: 'Nepal' });
      fireEvent.click(nepalLink);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).not.toHaveClass('expanded');
    });
  });

  describe('Accessibility', () => {
    it('toggle button has aria-controls attribute', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      expect(toggleButton).toHaveAttribute('aria-controls', 'menuContent');
    });

    it('toggle button has aria-expanded false when collapsed', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('toggle button has aria-expanded true when expanded', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('menu content has aria-hidden true when collapsed', () => {
      renderWithRouter(<Menu />);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).toHaveAttribute('aria-hidden', 'true');
    });

    it('menu content has aria-hidden false when expanded', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const menuContent = document.getElementById('menuContent');
      expect(menuContent).toHaveAttribute('aria-hidden', 'false');
    });

    it('close button has aria-label', () => {
      renderWithRouter(<Menu />);

      // Need to expand menu first to access close button
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toHaveAttribute('aria-label', 'Close');
    });
  });

  describe('NewArticleTag', () => {
    it('shows New tag for articles with newArticle flag', () => {
      renderWithRouter(<Menu />);

      const newTags = screen.getAllByText('New');
      // Should have at least one for Norsko and one for wedding
      expect(newTags.length).toBeGreaterThanOrEqual(2);
    });

    it('shows New tag on wedding link', () => {
      renderWithRouter(<Menu />);

      const weddingItem = screen.getByText('Naše svatba').closest('li');
      const newTag = weddingItem.querySelector('.newArticleTag');
      expect(newTag).toBeInTheDocument();
    });
  });

  describe('Link paths', () => {
    it('O nás links to root', () => {
      renderWithRouter(<Menu />);

      // Expand menu first to make links accessible
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const aboutLink = screen.getByRole('link', { name: 'O nás' });
      expect(aboutLink).toHaveAttribute('href', '/');
    });

    it('article links have correct paths', () => {
      renderWithRouter(<Menu />);

      // Expand menu first
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      expect(screen.getByRole('link', { name: 'Nepal' })).toHaveAttribute('href', '/nepal');
      expect(screen.getByRole('link', { name: 'Norsko' })).toHaveAttribute('href', '/norsko');
      expect(screen.getByRole('link', { name: 'Slovinsko' })).toHaveAttribute('href', '/slovinsko');
    });
  });

  describe('CSS classes', () => {
    it('nav has navbar class', () => {
      renderWithRouter(<Menu />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('navbar');
    });

    it('toggle button has navbar-toggler class', () => {
      renderWithRouter(<Menu />);

      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      expect(toggleButton).toHaveClass('navbar-toggler');
    });

    it('menu items have nav-item class', () => {
      renderWithRouter(<Menu />);

      const listItems = document.querySelectorAll('.nav-item');
      expect(listItems.length).toBeGreaterThan(0);
    });

    it('links have nav-link class', () => {
      renderWithRouter(<Menu />);

      // Expand menu first
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const nepalLink = screen.getByRole('link', { name: 'Nepal' });
      expect(nepalLink).toHaveClass('nav-link');
    });
  });

  describe('Active state', () => {
    it('O nás link is active on root path', () => {
      renderWithRouter(<Menu />, ['/']);

      // Expand menu first
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const aboutLink = screen.getByRole('link', { name: 'O nás' });
      expect(aboutLink).toHaveClass('active');
    });

    it('article link is active when on its path', () => {
      renderWithRouter(<Menu />, ['/nepal']);

      // Expand menu first
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      const nepalLink = screen.getByRole('link', { name: 'Nepal' });
      expect(nepalLink).toHaveClass('active');
    });
  });

  describe('Hamburger icon', () => {
    it('renders hamburger icon rows', () => {
      renderWithRouter(<Menu />);

      const hamburgerRows = document.querySelectorAll('.hamburgerMenuRow');
      expect(hamburgerRows).toHaveLength(3);
    });

    it('hamburger icon is inside span', () => {
      renderWithRouter(<Menu />);

      const hamburgerIcon = document.querySelector('.hamburgerIcon');
      expect(hamburgerIcon).toBeInTheDocument();
    });
  });

  describe('Empty article list', () => {
    it('renders correctly with empty article list', () => {
      getArticleList.mockReturnValue([]);
      renderWithRouter(<Menu />);

      // Expand menu first
      const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
      fireEvent.click(toggleButton);

      expect(screen.getByRole('link', { name: 'O nás' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Naše svatba' })).toBeInTheDocument();
    });
  });
});
