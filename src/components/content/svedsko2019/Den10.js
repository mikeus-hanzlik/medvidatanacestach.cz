import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/HyggeKoutek.jpg";

import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Hygge koutek za krbem");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Konec jedné zasněžené pohádky" date="Středa 20. 2. " />
        <p>Všechno jednou končí a tak se nachýlil i konec naší zimní svatební cesty. Ráno pobalíme, pouklidíme a vyrazíme. Cestou na stockholmské
            letiště Arlanda ještě tankujeme, poté předáme auto, posilníme se v letištním salónku a už se vznášíme v oblacích směr Praha.</p>
        <p>Celá dovolená se nám moc povedla. Nejradši vzpomínáme na naši pohádkovou chatičku Freju, uprostřed zasněženého lesa, kde se schovávají sobi
            a losi. S krbem a kouzelným koutkem u krbu, akorát tak na to se tam schoulit se skleničkou, nechat se nahřívat teplou zdí a snít o tom, že
            nad námi právě tancuje polární záře. Sem se určitě vrátíme! A kdo ví, třeba to bude už s naší Nikolkou, je tu přece jeden pokojík navíc. <Smile /></p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
    </div>)
}, [img1])
