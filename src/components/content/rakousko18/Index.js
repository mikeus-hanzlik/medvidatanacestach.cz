import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import trasaSrt from "../../../images/rakousko18/HoheTauernTrasa.png";
import Image from "../../articles/Image";
import Smile from "../../icons/Smile";

const trasa = buildLightboxImage(trasaSrt, `Trasa v NP Hohe Tauern`);

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Hohe Tauern 2018</h1>
        <p>Po 3 týdnech po návratu ze Slovinska už nám hory zas chybí a vymýšlíme, kam na další výlet. Necháváme se
            inspirovat Šárky běžkařskou kamarádkou Káťou, od které neúnavně sbíráme tipy a moc za ně děkujeme. <Smile/>
        </p>
        <p>Máme jen prodloužený víkend a los nakonec padá na Rakousko – tentokrát národní park Vysoké Taury, Hohe
            Tauern. Naplánujeme si 66 km dlouhou trasu, která se nakonec ukáže být na 3 dny a kousek moc
            ambiciózní, takže nakonec přistoupíme na alternativní trasu, která má cca 40 km.</p>
        <Image lightboxImage={trasa} openLightbox={openLightbox}>
            <span>(<a href="https://mapy.cz/s/3pfPq" rel="noopener noreferrer" target="_blank">mapa zde</a>)</span>
        </Image>
    </div>)
}, [trasa])
