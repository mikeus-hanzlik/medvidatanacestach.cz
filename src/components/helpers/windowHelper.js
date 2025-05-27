/**
 * Safely get window width
 * @returns {number} Window width or 0 if window is not available
 */
export const getWindowWidth = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth;
    }
    return 0;
};

/**
 * Safely get window height
 * @returns {number} Window height or 0 if window is not available
 */
export const getWindowHeight = () => {
    if (typeof window !== 'undefined') {
        return window.innerHeight;
    }
    return 0;
};

/**
 * Check if the current device is mobile based on window width
 * @returns {boolean} True if mobile device (window available and width <= 768)
 */
export const isMobileDevice = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    return window.innerWidth <= 768;
};

/**
 * Check if window is available (for SSR compatibility)
 * @returns {boolean} True if window object is available
 */
export const isWindowAvailable = () => {
    return typeof window !== 'undefined';
};