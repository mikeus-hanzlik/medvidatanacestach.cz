import React from "react";

export default ({lightboxImage, openLightbox, children}) => {
    return (<figure>
        <img src={lightboxImage.src} alt={lightboxImage.caption} onClick={openLightbox()} />
        <figcaption>{lightboxImage.caption} {children}</figcaption>
    </figure>)
}
