import { useState, useCallback, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const withLightbox = (Component, images = []) => {
    const WithLightboxComponent = (props) => {
        const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        
        // Create a map of image src to index for quick lookup
        const imageIndexMap = useMemo(() => {
            const map = new Map();
            images.forEach((img, index) => {
                if (img && img.src) {
                    map.set(img.src, index);
                }
            });
            return map;
        }, []);

        // openLightbox now accepts either an index (number) or an image object
        // This allows Image component to pass the lightboxImage directly
        const openLightbox = useCallback((indexOrImage) => {
            let index;
            
            if (typeof indexOrImage === 'number') {
                // Legacy support: direct index
                index = indexOrImage;
            } else if (indexOrImage && indexOrImage.src) {
                // New approach: find index by matching image src
                index = imageIndexMap.get(indexOrImage.src);
                if (index === undefined) {
                    console.warn(`withLightbox: Image not found in registered images`, indexOrImage.src);
                    return;
                }
            } else {
                index = 0;
            }
            
            if (index >= 0 && index < images.length) {
                setCurrentImageIndex(index);
                setLightboxIsOpen(true);
            } else {
                console.warn(`Invalid image index: ${index}. Available images: ${images.length}`);
            }
        }, [imageIndexMap]);

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
