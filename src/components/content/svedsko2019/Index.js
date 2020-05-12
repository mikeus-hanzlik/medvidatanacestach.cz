import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1src from "../../../images/svedsko2019/UvodniObrazek.jpg";
import Image from "../../articles/Image";

const img1 = buildLightboxImage(img1src, `Sníh, led a my`);

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Svatební cesta 2019</h1>
        <p>Většina novomanželů vyráží na svatební cestu do teplých krajin. U nás to bylo trochu jinak. Chtěli jsme někam do zimy, kde je sníh, les,
            žádní lidé a dá se tam běžkovat. A protože Švédsko je moje srdcová záležitost (a navíc tam je levněji než třeba v sousedním Norsku) a
            našli jsme tam parádní dřevěnou chaloupku na samotě v lese jen pro nás, bylo rozhodnuto.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
    </div>)
}, [img1])
