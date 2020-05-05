import React from "react";
import withLightbox from "../infrastructure/withLightbox";
import {buildLightboxImage} from "../helpers/imageHelper";
import imgSrc from "../../images/My3.jpg";
import Smile from "../icons/Smile";

const img = buildLightboxImage(imgSrc, "My");

const relationshipBeginning = new Date("2016-10-01");
const getRelationshipDuration = () => {
    const durationDifMs = Date.now() - relationshipBeginning;
    return Math.abs(new Date(durationDifMs).getUTCFullYear() - 1970);
}

export default withLightbox(({openLightbox}) => {
    return (<div className="aboutUsContent">
        <h1>O nás</h1>
        <p>Ahoj! Ať už omylem, nebo cíleně, zavítali jste na náš skromný cestovatelský blog. Pokud nás neznáte, jmenujeme se Šárka a Michal, jsme
            obyčejný manželský pár ze západních Čech, který žije v Praze a pracuje v korporacích. Sezení v kanceláři se snažíme kompenzovat výlety do
            přírody. Nejradši jezdíme na vandry a na hory, nebo aspoň kamkoliv do lesa. Čím míň lidí potkáme, tím líp. <Smile/> A proč Medvíďata? Kdo zná
            Michala, ten ví, no a já jsem to tak nějak podědila.</p>
        <p>Za {getRelationshipDuration()} {getRelationshipDuration() < 5 ? "roky" : "let"}, co jsme spolu, jsme toho stihli už celkem dost. Ahoj! Ať
            už omylem, nebo cíleně, zavítali jste na náš skromný cestovatelský blog. Pokud nás neznáte, jmenujeme se Šárka a Michal, jsme obyčejný
            manželský pár ze západních Čech, který žije v Praze a pracuje v korporacích. Sezení v kanceláři se snažíme kompenzovat výlety do přírody.
            Nejradši jezdíme na vandry a na hory, nebo aspoň kamkoliv do lesa. Čím míň lidí potkáme, tím líp. <Smile/> A proč Medvíďata? Kdo zná Michala,
            ten ví, no a já jsem to tak nějak podědila.</p>
        <p>Začátkem prosince roku 2019 se nám převrátil život vzhůru nohama. Narodila se nám Nikolka a své výlety jsme chtě nechtě museli trochu
            přizpůsobit. I tak se snažíme podnikat výlety s kočárem, vozíkem nebo nosítkem a už teď se těšíme, až bude to naše malé medvídě běhat po
            horách s námi.</p>
        <p>Snad se vám bude naše vyprávění líbit!</p>
        <figure>
            <img src={img.src} alt={img.caption} onClick={openLightbox(0)} />
            <figcaption>{img.caption}</figcaption>
        </figure>
    </div>)
}, [img])