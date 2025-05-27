import React from 'react';

const Lightbox = ({ open, close, slides, ...props }) => {
  if (!open) return null;
  
  return (
    <div data-testid="lightbox-mock" onClick={close}>
      <div>Lightbox Mock</div>
    </div>
  );
};

export default Lightbox;
