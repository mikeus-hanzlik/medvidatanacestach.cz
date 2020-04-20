import React from "react";
import withLightbox from "../infrastructure/withLightbox";
import {buildLightboxImage} from "../helpers/imageHelper";
import imgSrc from "../../images/My.jpg";

const img = buildLightboxImage(imgSrc, "My");

const relationshipBeginning = new Date("2016-10-01");
const getRelationshipDuration = () => {
    const durationDifMs = Date.now() - relationshipBeginning;
    return Math.abs(new Date(durationDifMs).getUTCFullYear() - 1970);
}

export default withLightbox(({openLightbox}) => {
    return (<div className="aboutUsContent">
        <h1>O nás</h1>
        <p>Jsme Šárka a Michal. Původně ze západních Čech, i když teď už spíš z Prahy. Dvě kancelářské krysy, co pracují v korporaci a díky jedné se
            poznaly a zamilovaly se do sebe. Jedna outdoorová princezna a drsný, ale užitečný týpek (slovy Michala). Nadšenci, co rádi jezdí na vandry
            a chodí po horách. A každou volnou chvíli se rádi vydají někam do přírody.</p>
        <p>Za {getRelationshipDuration()} {getRelationshipDuration() < 5 ? "roky" : "let"}, co jsme spolu, jsme toho stihli už celkem dost. Od začátku se snažíme psát si (později kvůli úspoře času i nahrávat)
            cestovatelský deník, a tak vznikl nápad tohohle blogu.</p>
        <p><b>Šárka</b>: Obsah, návrh designu</p>
        <p><b>Michal</b>: Tvorba webu</p>
        <figure>
            <img src={img.src} alt={img.caption} onClick={openLightbox(0)} />
            <figcaption>{img.caption}</figcaption>
        </figure>
    </div>)
}, [img])