import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import trasaSrt from "../../../images/slovinsko/SlovinskoTrasa.png";
import Image from "../../articles/Image";

const trasa = buildLightboxImage(trasaSrt, `Trasa v NP Triglav` );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Slovinsko 2018</h1>
        <p>Když jsme byli na Velikonoce 2017 na Slovinsku, úplně nás to uchvátilo. Do hor jsme jen nakoukli, vylezli od Bohinjského jezera do kouzelného údolí Triglavských jezer a strávili noc v nouzové noclehárně uprostřed zasněžených hor. Na samotný Triglav jsme tenkrát vylézt nemohli – pro fůru sněhu bychom nenašli cestu. Nejen proto jsme se sem museli vydat znovu. V plánu byl červenec 2018. I když se nám to trochu zkomplikovalo Šárinky nemocí a odjezd byl nejistý, nakonec všechno klaplo a hory Šárinku po několika dnech vyléčily. Výlet to byl nad očekávání parádní, a jak se později ukázalo, pro nás taky trochu památný. ☺</p>
        <Image lightboxImage={trasa} openLightbox={openLightbox} >
            <span>(<a href="https://mapy.cz/s/2P5b6" rel="noopener noreferrer" target="_blank">mapa zde</a>)</span>
        </Image>
    </div>)
}, [trasa])
