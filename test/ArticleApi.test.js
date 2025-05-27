import { describe, it, expect } from 'vitest';
import { getArticleList, getArticleDetailLinks, getNextArticleDetail } from '../src/api/ArticleApi';

describe('ArticleApi', () => {
  describe('getArticleList', () => {
    it('returns an array of articles', () => {
      const articles = getArticleList();
      expect(Array.isArray(articles)).toBe(true);
      expect(articles.length).toBeGreaterThan(0);
    });

    it('each article has required properties', () => {
      const articles = getArticleList();
      articles.forEach(article => {
        expect(article).toHaveProperty('link');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('details');
        expect(Array.isArray(article.details)).toBe(true);
      });
    });
  });

  describe('getArticleDetailLinks', () => {
    it('returns details for existing article', () => {
      const details = getArticleDetailLinks('nepal');
      expect(Array.isArray(details)).toBe(true);
      expect(details.length).toBeGreaterThan(0);
    });

    it('returns null for non-existing article', () => {
      const details = getArticleDetailLinks('nonexistent');
      expect(details).toBeNull();
    });
  });

  describe('getNextArticleDetail', () => {
    it('returns next detail for valid input', () => {
      const nextDetail = getNextArticleDetail('nepal', 'den1');
      expect(nextDetail).toBeTruthy();
      expect(nextDetail.link).toBe('den2');
    });

    it('returns null for last detail', () => {
      const nextDetail = getNextArticleDetail('nepal', 'den15');
      expect(nextDetail).toBeNull();
    });    it('returns null for invalid article', () => {
      const nextDetail = getNextArticleDetail('nonexistent', 'den1');
      expect(nextDetail).toBeNull();
    });

    it('returns null for invalid detail', () => {
      const nextDetail = getNextArticleDetail('nepal', 'invalidDetail');
      expect(nextDetail).toBeNull();
    });
  });
});
