import React, { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const withLightbox = (Component, images = []) => {
    const WithLightboxComponent = (props) => {
        const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);        const openLightbox = useCallback((index = 0) => {
            if (index >= 0 && index < images.length) {
                setCurrentImageIndex(index);
                setLightboxIsOpen(true);
            } else {
                console.warn(`Invalid image index: ${index}. Available images: ${images.length}`);
            }
        }, [images.length]);

        const closeLightbox = useCallback(() => {
            setLightboxIsOpen(false);
            setCurrentImageIndex(0);
        }, []);

        // Convert images to the format expected by yet-another-react-lightbox
        const lightboxImages = images.map(img => {
            if (!img || !img.src) {
                console.warn('withLightbox: Invalid image object', img);
                return { src: '', alt: '' };
            }
            return {
                src: img.src,
                alt: img.caption || img.alt || "Obrázek z cesty"
            };
        });

        return (
            <div>
                <Component openLightbox={openLightbox} {...props} />
                {lightboxImages.length > 0 && (
                    <Lightbox
                        open={lightboxIsOpen}
                        close={closeLightbox}
                        slides={lightboxImages}
                        index={currentImageIndex}
                        controller={{ closeOnBackdropClick: true }}
                    />
                )}
            </div>
        );
    };

    WithLightboxComponent.displayName = `withLightbox(${Component.displayName || Component.name || 'Component'})`;
    
    return WithLightboxComponent;
};

export default withLightbox;
