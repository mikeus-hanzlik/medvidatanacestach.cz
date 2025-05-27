import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const withLightbox = (Component, images = []) => {
    const WithLightboxComponent = (props) => {
        const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const openLightbox = () => {
            let imgIndex = 0;
            return () => {
                const currentIndex = imgIndex++;
                return () => {
                    setCurrentImageIndex(currentIndex);
                    setLightboxIsOpen(true);
                };
            };
        };

        const closeLightbox = () => {
            setLightboxIsOpen(false);
            setCurrentImageIndex(0);
        };

        // Convert images to the format expected by yet-another-react-lightbox
        const lightboxImages = images.map(img => ({
            src: img.src,
            alt: img.caption || img.alt || ""
        }));

        return (
            <div>
                <Component openLightbox={openLightbox()} {...props} />
                <Lightbox
                    open={lightboxIsOpen}
                    close={closeLightbox}
                    slides={lightboxImages}
                    index={currentImageIndex}
                />
            </div>
        );
    };

    return WithLightboxComponent;
};

export default withLightbox;
