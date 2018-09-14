import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import zabiskiKukSrc from "../../../images/slovinsko/ZabiskiKuk.jpg";

const zabiskiKuk = buildLightboxImage(zabiskiKukSrc, "Žabiški Kuk" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Neděle 1. 7. – Koča Merjasec na Voglu – Koča na planini Razor</h1>
        <p>Vstáváme kolem osmé a jdeme na snídani. Venku je zima a mlha, nevidíme skoro nic. Čeká nás lehká rozcvička před dalšími náročnějšími dny v podobě 10 km přes hory Vogel a Žabiški Kuk. Jakmile se vydrápeme na hřeben pod vrcholem Vogelu, mraky se rozestoupí a užíváme si výhledy do údolí. To nejlepší ale teprve přichází – Žabiški Kuk! Tuhle horu si rychle oblíbíme, i když tu žádné žabišky nejsou.</p>
        <Image lightboxImage={zabiskiKuk} openLightbox={openLightbox} />
        <p>Po svačině a pár fotkách už zamíříme dolů k chatě na Planině Razor, kde strávíme další noc. Šárinka vypije asi 3 litry čaje a Míša jen o něco míň piva. Od našich nových amerických kamarádů se dozvídáme o horolezeckém svazu Slovinska, díky kterému je možné získat velké slevy na ubytování, a za 50 EUR se stáváme členy. Konečně z nás jsou správní horalové. ☺</p>
        <p>Ubytko moc fajn, skvělá paní domácí, ještě lepší guláš s polentou, ale sprcha ani teplá voda opět žádná. Šárinky téměř týden nemyté vlásky se ani dnes nedočkají. </p>
    </div>)
}, [zabiskiKuk])
