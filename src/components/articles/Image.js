import React from "react";

const Image = ({ lightboxImage, openLightbox, children, index = 0 }) => {
    if (!lightboxImage || !lightboxImage.src) {
        console.warn('Image component: Missing required lightboxImage.src');
        return null;
    }

    const handleImageClick = () => {
        if (typeof openLightbox === 'function') {
            openLightbox(index);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleImageClick();
        }
    };

    return (
        <figure className="article-image">
            <img 
                src={lightboxImage.src} 
                alt={lightboxImage.caption || 'Obrázek z cesty'} 
                onClick={handleImageClick}
                onKeyDown={handleKeyPress}
                tabIndex={0}
                role="button"
                aria-label={`Zobrazit obrázek "${lightboxImage.caption || 'obrázek z cesty'}" v galerii`}
                loading="lazy"
                style={{ cursor: 'pointer' }}
            />
            {(lightboxImage.caption || children) && (
                <figcaption>
                    {lightboxImage.caption} {children}
                </figcaption>
            )}
        </figure>
    );
};

export default Image;
