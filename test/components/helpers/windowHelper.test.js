import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { 
  getWindowWidth, 
  getWindowHeight, 
  isMobileDevice, 
  isWindowAvailable 
} from '../../../src/components/helpers/windowHelper';

describe('windowHelper', () => {
  // Store original window object
  const originalWindow = global.window;

  afterEach(() => {
    // Restore original window
    global.window = originalWindow;
  });

  describe('getWindowWidth', () => {
    it('returns window.innerWidth when window is available', () => {
      global.window = {
        innerWidth: 1200
      };

      const result = getWindowWidth();
      expect(result).toBe(1200);
    });

    it('returns 0 when window is not available', () => {
      global.window = undefined;

      const result = getWindowWidth();
      expect(result).toBe(0);
    });

    it('handles window with different widths', () => {
      const testWidths = [320, 768, 1024, 1920, 2560];
      
      testWidths.forEach(width => {
        global.window = { innerWidth: width };
        expect(getWindowWidth()).toBe(width);
      });
    });

    it('handles window with zero width', () => {
      global.window = { innerWidth: 0 };
      expect(getWindowWidth()).toBe(0);
    });

    it('handles window with negative width', () => {
      global.window = { innerWidth: -100 };
      expect(getWindowWidth()).toBe(-100);
    });
  });

  describe('getWindowHeight', () => {
    it('returns window.innerHeight when window is available', () => {
      global.window = {
        innerHeight: 800
      };

      const result = getWindowHeight();
      expect(result).toBe(800);
    });

    it('returns 0 when window is not available', () => {
      global.window = undefined;

      const result = getWindowHeight();
      expect(result).toBe(0);
    });

    it('handles window with different heights', () => {
      const testHeights = [480, 600, 768, 1080, 1440];
      
      testHeights.forEach(height => {
        global.window = { innerHeight: height };
        expect(getWindowHeight()).toBe(height);
      });
    });

    it('handles window with zero height', () => {
      global.window = { innerHeight: 0 };
      expect(getWindowHeight()).toBe(0);
    });

    it('handles window with negative height', () => {
      global.window = { innerHeight: -50 };
      expect(getWindowHeight()).toBe(-50);
    });
  });

  describe('isMobileDevice', () => {
    it('returns true for mobile width (768px or less)', () => {
      const mobileWidths = [320, 375, 414, 768];
      
      mobileWidths.forEach(width => {
        global.window = { innerWidth: width };
        expect(isMobileDevice()).toBe(true);
      });
    });

    it('returns false for desktop width (greater than 768px)', () => {
      const desktopWidths = [769, 1024, 1200, 1920];
      
      desktopWidths.forEach(width => {
        global.window = { innerWidth: width };
        expect(isMobileDevice()).toBe(false);
      });
    });

    it('returns false when window is not available', () => {
      global.window = undefined;
      expect(isMobileDevice()).toBe(false);
    });

    it('handles edge case at exactly 768px', () => {
      global.window = { innerWidth: 768 };
      expect(isMobileDevice()).toBe(true);
    });

    it('handles edge case at 769px', () => {
      global.window = { innerWidth: 769 };
      expect(isMobileDevice()).toBe(false);
    });

    it('handles zero width as mobile', () => {
      global.window = { innerWidth: 0 };
      expect(isMobileDevice()).toBe(true);
    });

    it('handles negative width as mobile', () => {
      global.window = { innerWidth: -100 };
      expect(isMobileDevice()).toBe(true);
    });
  });

  describe('isWindowAvailable', () => {
    it('returns true when window is available', () => {
      global.window = {
        innerWidth: 1200,
        innerHeight: 800
      };

      expect(isWindowAvailable()).toBe(true);
    });

    it('returns false when window is undefined', () => {
      global.window = undefined;
      expect(isWindowAvailable()).toBe(false);
    });

    it('returns false when window is null', () => {
      global.window = null;
      expect(isWindowAvailable()).toBe(false);
    });

    it('returns true even for empty window object', () => {
      global.window = {};
      expect(isWindowAvailable()).toBe(true);
    });

    it('returns true for window with partial properties', () => {
      global.window = { innerWidth: 1200 };
      expect(isWindowAvailable()).toBe(true);
    });
  });

  describe('integration scenarios', () => {
    it('all functions work together for SSR scenario', () => {
      // Simulate server-side rendering
      global.window = undefined;

      expect(isWindowAvailable()).toBe(false);
      expect(getWindowWidth()).toBe(0);
      expect(getWindowHeight()).toBe(0);
      expect(isMobileDevice()).toBe(false);
    });

    it('all functions work together for mobile scenario', () => {
      global.window = {
        innerWidth: 375,
        innerHeight: 667
      };

      expect(isWindowAvailable()).toBe(true);
      expect(getWindowWidth()).toBe(375);
      expect(getWindowHeight()).toBe(667);
      expect(isMobileDevice()).toBe(true);
    });

    it('all functions work together for desktop scenario', () => {
      global.window = {
        innerWidth: 1920,
        innerHeight: 1080
      };

      expect(isWindowAvailable()).toBe(true);
      expect(getWindowWidth()).toBe(1920);
      expect(getWindowHeight()).toBe(1080);
      expect(isMobileDevice()).toBe(false);
    });

    it('functions handle window resize simulation', () => {
      // Start with mobile
      global.window = { innerWidth: 375 };
      expect(isMobileDevice()).toBe(true);

      // Resize to desktop
      global.window.innerWidth = 1200;
      expect(isMobileDevice()).toBe(false);

      // Resize back to mobile
      global.window.innerWidth = 768;
      expect(isMobileDevice()).toBe(true);
    });
  });

  describe('error handling', () => {
    it('handles corrupted window object gracefully', () => {
      global.window = {
        innerWidth: 'not a number',
        innerHeight: null
      };

      expect(isWindowAvailable()).toBe(true);
      expect(getWindowWidth()).toBe('not a number');
      expect(getWindowHeight()).toBe(null);
      // isMobileDevice will do string comparison with <= 768
      expect(isMobileDevice()).toBe(false);
    });

    it('handles window with getter properties', () => {
      global.window = {
        get innerWidth() { return 1024; },
        get innerHeight() { return 768; }
      };

      expect(getWindowWidth()).toBe(1024);
      expect(getWindowHeight()).toBe(768);
      expect(isMobileDevice()).toBe(false);
    });

    it('handles window with getter that throws', () => {
      global.window = {
        get innerWidth() { throw new Error('Access denied'); },
        innerHeight: 768
      };

      expect(() => getWindowWidth()).toThrow('Access denied');
      expect(getWindowHeight()).toBe(768);
    });
  });
});
