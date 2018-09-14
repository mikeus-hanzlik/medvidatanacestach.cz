import React from "react";

export default ({lightboxImage, openLightbox}) => {
    return (<figure>
        <img src={lightboxImage.src} alt={lightboxImage.caption} onClick={openLightbox()} />
        <figcaption>{lightboxImage.caption}</figcaption>
    </figure>)
}
