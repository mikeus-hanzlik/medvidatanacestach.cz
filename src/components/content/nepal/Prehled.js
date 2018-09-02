import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import img1 from '../../../images/3d-landscape-1920x1080-wallpaper-1795.jpg';
import img2 from '../../../images/amazing-church-view-1920x1080-wallpaper-1683.jpg';


const Prehled = ({openLightbox}) => {
    return (
        <div>
            <p>Prehled o Nepalu</p>
            <img src={img1} alt="bla" onClick={openLightbox(0)} />
            <img src={img2} alt="bla2" onClick={openLightbox(1)} />
        </div>)
};

export default withLightbox(Prehled, [img1, img2]);