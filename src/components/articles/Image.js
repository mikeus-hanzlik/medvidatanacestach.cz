import React from "react";

const Image = ({lightboxImage, openLightbox, children}) => {
    return (<figure>
        <img src={lightboxImage.src} alt={lightboxImage.caption} onClick={openLightbox()} />
        <figcaption>{lightboxImage.caption} {children}</figcaption>
    </figure>)
}

export default Image;
