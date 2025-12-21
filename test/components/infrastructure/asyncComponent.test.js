import React from 'react';
import { describe, it, expect } from 'vitest';
import asyncComponent from '../../../src/components/infrastructure/asyncComponent';

describe('asyncComponent', () => {
  describe('Basic functionality', () => {
    it('returns a React.lazy component', () => {
      const importFn = () => Promise.resolve({ default: () => <div>Test</div> });
      const LazyComponent = asyncComponent(importFn);
      
      // React.lazy returns an object with $$typeof Symbol
      expect(LazyComponent).toBeDefined();
      expect(LazyComponent.$$typeof).toBe(Symbol.for('react.lazy'));
    });

    it('accepts a function as parameter', () => {
      const importFn = () => Promise.resolve({ default: () => null });
      
      expect(() => asyncComponent(importFn)).not.toThrow();
    });

    it('returns different lazy components for different imports', () => {
      const importFn1 = () => Promise.resolve({ default: () => <div>1</div> });
      const importFn2 = () => Promise.resolve({ default: () => <div>2</div> });
      
      const LazyComponent1 = asyncComponent(importFn1);
      const LazyComponent2 = asyncComponent(importFn2);
      
      expect(LazyComponent1).not.toBe(LazyComponent2);
    });
  });

  describe('Return type', () => {
    it('returns an object with correct React.lazy structure', () => {
      const importFn = () => Promise.resolve({ default: () => <div>Test</div> });
      const LazyComponent = asyncComponent(importFn);
      
      expect(typeof LazyComponent).toBe('object');
      expect(LazyComponent.$$typeof).toBeDefined();
    });

    it('lazy component has _init and _payload properties', () => {
      const importFn = () => Promise.resolve({ default: () => <div>Test</div> });
      const LazyComponent = asyncComponent(importFn);
      
      // React.lazy components have these internal properties
      expect(LazyComponent._init).toBeDefined();
      expect(LazyComponent._payload).toBeDefined();
    });
  });

  describe('Edge cases', () => {
    it('handles import function that returns resolved promise', () => {
      const importFn = () => Promise.resolve({ default: () => <div>Resolved</div> });
      const LazyComponent = asyncComponent(importFn);
      
      expect(LazyComponent).toBeDefined();
    });

    it('handles import function returning promise with delay', () => {
      const importFn = () => new Promise(resolve => {
        setTimeout(() => resolve({ default: () => <div>Delayed</div> }), 100);
      });
      const LazyComponent = asyncComponent(importFn);
      
      expect(LazyComponent).toBeDefined();
    });
  });

  describe('Integration with dynamic imports', () => {
    it('works with dynamic import pattern', () => {
      // Simulating dynamic import pattern
      const importFn = () => Promise.resolve({
        default: function TestComponent() {
          return React.createElement('div', null, 'Dynamic Component');
        }
      });
      
      const LazyComponent = asyncComponent(importFn);
      expect(LazyComponent.$$typeof).toBe(Symbol.for('react.lazy'));
    });

    it('works with class component', () => {
      class TestClassComponent extends React.Component {
        render() {
          return React.createElement('div', null, 'Class Component');
        }
      }
      
      const importFn = () => Promise.resolve({ default: TestClassComponent });
      const LazyComponent = asyncComponent(importFn);
      
      expect(LazyComponent).toBeDefined();
    });
  });

  describe('Multiple calls', () => {
    it('can create multiple lazy components', () => {
      const components = [];
      for (let i = 0; i < 5; i++) {
        const importFn = () => Promise.resolve({ default: () => <div>{i}</div> });
        components.push(asyncComponent(importFn));
      }
      
      expect(components).toHaveLength(5);
      components.forEach(component => {
        expect(component.$$typeof).toBe(Symbol.for('react.lazy'));
      });
    });
  });
});
