import { describe, it, expect } from 'vitest';
import { buildLightboxImage } from '../../../src/components/helpers/imageHelper';

describe('imageHelper', () => {
  describe('buildLightboxImage', () => {
    it('creates lightbox image object with src and caption', () => {
      const src = '/test-image.jpg';
      const caption = 'Test caption';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: caption
      });
    });

    it('handles empty string src', () => {
      const src = '';
      const caption = 'Caption for empty src';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: '',
        caption: caption
      });
    });

    it('handles empty string caption', () => {
      const src = '/image.jpg';
      const caption = '';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: ''
      });
    });

    it('handles null src', () => {
      const src = null;
      const caption = 'Test caption';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: null,
        caption: caption
      });
    });

    it('handles null caption', () => {
      const src = '/image.jpg';
      const caption = null;
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: null
      });
    });

    it('handles undefined parameters', () => {
      const result = buildLightboxImage(undefined, undefined);
      
      expect(result).toEqual({
        src: undefined,
        caption: undefined
      });
    });

    it('handles numeric src', () => {
      const src = 123;
      const caption = 'Numeric src';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: 123,
        caption: caption
      });
    });

    it('handles object src', () => {
      const src = { url: '/image.jpg' };
      const caption = 'Object src';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: caption
      });
    });

    it('handles long caption text', () => {
      const src = '/image.jpg';
      const caption = 'Very long caption text that might be used to describe a complex image with lots of details and information about what is shown in the photograph or illustration';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: caption
      });
    });

    it('handles special characters in caption', () => {
      const src = '/image.jpg';
      const caption = 'Caption with special chars: !@#$%^&*()_+-={}[]|\\:";\'<>?,./ áčďěíňóřšťúůýž';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: caption
      });
    });

    it('handles URL with query parameters as src', () => {
      const src = '/image.jpg?v=1&size=large&format=webp';
      const caption = 'Image with query params';
      
      const result = buildLightboxImage(src, caption);
      
      expect(result).toEqual({
        src: src,
        caption: caption
      });
    });

    it('returns new object instance each time', () => {
      const src = '/image.jpg';
      const caption = 'Test';
      
      const result1 = buildLightboxImage(src, caption);
      const result2 = buildLightboxImage(src, caption);
      
      expect(result1).toEqual(result2);
      expect(result1).not.toBe(result2); // Different object instances
    });

    it('preserves data types of input parameters', () => {
      const src = '/image.jpg';
      const caption = 42;
      
      const result = buildLightboxImage(src, caption);
      
      expect(result.src).toBe(src);
      expect(result.caption).toBe(42);
      expect(typeof result.caption).toBe('number');
    });
  });
});
