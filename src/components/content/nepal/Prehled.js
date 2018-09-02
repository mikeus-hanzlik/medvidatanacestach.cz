import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import img1src from '../../../images/3d-landscape-1920x1080-wallpaper-1795.jpg';
import img2src from '../../../images/amazing-church-view-1920x1080-wallpaper-1683.jpg';
import {buildLightboxImage} from "../../helpers/imageHelper";

const img01 = buildLightboxImage(img1src, "popisek");
const img02 = buildLightboxImage(img2src, "popisek2");

const Prehled = ({openLightbox}) => {
    return (
        <div>
            <p>Prehled o Nepalu</p>
            <div>
                <img width="500" src={img01.src} alt="bla" onClick={openLightbox(0)}/>
            </div>
            <div>
                <img width="100" src={img02.src} alt="bla2" onClick={openLightbox(1)}/>
            </div>
        </div>)
};

export default withLightbox(Prehled, [img01, img02]);