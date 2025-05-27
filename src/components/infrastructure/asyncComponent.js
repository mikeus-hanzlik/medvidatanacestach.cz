import React from 'react';

/**
 * Modern async component using React.lazy
 * @param {Function} importComponent - Function that returns a dynamic import
 * @returns {React.Component} Lazy component
 */
const asyncComponent = (importComponent) => {
    return React.lazy(importComponent);
};

export default asyncComponent;