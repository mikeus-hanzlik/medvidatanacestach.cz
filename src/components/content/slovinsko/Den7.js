import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko/TolminGorge.jpg";

const img1 = buildLightboxImage(img1Src, "Tolmin Gorge" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Pátek 6. 7. – Tolmin Gorge, Soča, Vršič Pass</h1>
        <p>Jsme bez jídla, ale na foursquaru najdeme dobře hodnocenou kavárno-restauraci v nedaleké Bohinjské Bistrici. Dáváme si tu luxusní snídani, slovenian traditional honey breakfast a kafe a jsme nadšení. Šárinka medem nešetří, a taky si tím pocintá, co může. V nedalekém info centru kupujeme nezbytnou magnetku na lednici a pokračujeme dále až do Tolminu, kde nakoupíme pár mňaminek a projdeme si krásnou rokli řeky Tolminky.</p>
        <figure>
            <img height={350} src={img1.src} alt={img1.caption} onClick={openLightbox(0)} />
            <figcaption>{img1.caption}</figcaption>
        </figure>
        <p>Odpoledne děláme ještě jednu zastávku, a to na koupání v nádherně modré vodě řeky Soči. Je to teda pěkná ledárna, ale v tom vedru to bodne. Pokračujeme klikatou silničkou až na Vršič Pass, který má kolem 1700 mnm. Je to jízda plná nádherných výhledů na hory kolem. Necháváme Obludu na parkovišti, převlékáme se opět do hikovacího a přesouváme se do Poštarskiho domu na Vršiču, kde máme booknutý pokoj. Je tu krásná jídelna dokonce i s krbem a krásně teplo. K večeři si dáváme guláš a sladké knedlíčky štruklji, po kterých se Šárinka může utlouct.</p>
    </div>)
}, [img1])