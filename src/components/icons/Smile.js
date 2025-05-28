import React from "react";

const Smile = ({ 
  width = 16, 
  height = 16, 
  className,
  style,
  title,
  'aria-label': ariaLabel = 'smile',
  ...props 
}) => {  // Handle null/undefined values by defaulting to 16, but preserve zero values
  const widthStr = String(width === null || width === undefined ? 16 : width);
  const heightStr = String(height === null || height === undefined ? 16 : height);
  
  return (
    <svg
      width={widthStr}
      height={heightStr}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={style}
      title={title}
      {...props}
    >      <circle cx="12" cy="12" r="10" />
      <path d="m9 9 1.5 1.5L12 9l1.5 1.5L15 9" />
      <path d="m9 15a3 3 0 0 0 6 0" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
};

export default Smile;