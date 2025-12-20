const Image = ({ lightboxImage, openLightbox, children }) => {
    if (!lightboxImage || !lightboxImage.src) {
        console.warn('Image component: Missing required lightboxImage.src');
        return null;
    }

    const handleImageClick = () => {
        if (typeof openLightbox === 'function') {
            // Pass the image object directly - withLightbox will find the index automatically
            openLightbox(lightboxImage);
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
