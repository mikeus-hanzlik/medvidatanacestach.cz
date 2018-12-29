import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import trasaSrt from "../../../images/slovinsko17/Trasa.PNG";
import Image from "../../articles/Image";

const trasa = buildLightboxImage(trasaSrt, `Trasa v NP Triglav`);

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Slovinsko 2017</h1>
        <p>Naše první dlouhá společná cesta autem vedla do Slovinska a jeho národního parku Triglav. Pro nás oba to byla
            první návštěva téhle krásné malé země, rozhodně ale ne poslední. Cestou jsme potkali vedro, déšť, sníh, ale
            skoro žádné lidi. </p>
        <Image lightboxImage={trasa} openLightbox={openLightbox}>
            <span>(<a href="https://mapy.cz/s/3iizW" rel="noopener noreferrer" target="_blank">mapa zde</a>)</span>
        </Image>
    </div>)
}, [trasa])
