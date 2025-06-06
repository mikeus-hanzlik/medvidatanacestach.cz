import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko/CestaDoUdoli.jpg";
import img2Src from "../../../images/slovinsko/KosijevDom.jpg";
import img3Src from "../../../images/slovinsko/LavickaNadBohinj.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Cesta do údolí" );
const img2 = buildLightboxImage(img2Src, "Výhled od Kosijev Dom" );
const img3 = buildLightboxImage(img3Src, "Lavička nad Bohinjským jezerem" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Koča na Doliču – Kosijev Dom" date="Středa 4. 7."/>
        <p>Protože nás Němci a Skoti, se kterými sdílíme pokoj, budí brzy, vstáváme už kolem sedmé a po osmé vyrážíme dolů do údolí. Protože jsme jako na většině našich výletů rychlejší, než si naplánujeme, máme najednou víc času. Rušíme rezervaci v Triglavskim domu na Kredarici a ověřujeme si, že můžeme do Kosijeva Domu dorazit již dnes. Je azuro, ale počasí se brzy kazí a nakonec začíná pršet. Jsme rádi, že jsme Triglav zvládli už včera, s mokrými kameny by to bylo dost riskantní.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Jsme bez pití, ale podle mapy.cz by měl být dole u Velo Polje kohout s vodou. Každým krokem klesáme, necháváme sníh a holé skály za sebou a znovu vcházíme do vegetace, mezi borovice, kytičky a stáda krav. Cesta na Velo Polje je nádherná, ani nám nevadí, že leje. Je to veliká louka s pár pasteveckými chýšemi a opravdu tu najdeme i kohout s vodou. Rychle oblékáme nepromokavé oblečení a filtrujeme vodu do vaků.</p>
        <p>Pokračujeme dál a blížíme se k jezírku, kde jsme se původně chtěli vykoupat. Místo průzračné vody však potkáváme louži bláta. Vcházíme do lesa, kde se klikatou nepříliš prošlapanou cestičkou prodíráme jehličím i trávami. Ten den nepotkáme snad ani živáčka. Když po dlouhém klesání začne cesta zas prudce stoupat, už toho máme plné kecky. Přicházíme ale do dalších pasteveckých vesniček na svazích hor a k tomu vysvitne i sluníčko, tak je hned líp. Potom trochu bloudíme, mapy.cz tady totiž úplně nesedí a navíc musíme na stezce neustále podlézat a obcházet spadané stromy.  Kolem druhé odpolední přicházíme na Planinu Blato, kde si dáváme sváču. Odtud nás čeká už jen posledních pár kilometrů po asfaltce na Planinu Vogar, kde je i naše dnešní útočiště.</p>
        <p>Když uťapkaní konečně dorazíme ke Kosijev Domu, máme děsnou radost, protože je to moc pěkná chata s velkým venkovním sezením a výhledem na hory na protějším břehu Bohinjského jezera, kde jsme chodili první dva dny. Šárinku už naštěstí krk moc nebolí, tak si dokonce dá i vychlazeného Radlera. Svítí sluníčko a je pěkný hic, taky jsme dnes sestoupali asi 1200 výškových metrů. Rozvěsíme mokré oblečení, sundáme smradlavé pohorky a fusekle a vyzevlíme se. To je pohodička, kterou jsme přesně potřebovali!</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Večer se jdeme ještě podívat na vyhlídku kousek odsud – je tu krásná dřevěná lavička s vyřezaným srdíčkem a luxusní výhled na Bohinjské jezero. Poprvé (a taky naposled) tady ve Slovinsku si navíc večer dopřáváme sprchu a Šárinka si konečně po více než týdnu může umýt vlasy.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
    </div>)
}, [img1, img2, img3])
