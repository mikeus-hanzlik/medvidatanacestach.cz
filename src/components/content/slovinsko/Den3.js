import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko/SedmTriglavskychJezer.jpg";
import img2Src from "../../../images/slovinsko/PrstynekUJezera.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Údolí Triglavských jezer" );
const img2 = buildLightboxImage(img2Src, "Prstýnek" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Koča na planini Razor – Koča při Triglavskih jezerih" date="Pondělí 2. 7."/>
        <p>Hluční sousedé nás budí už před sedmou. Dáváme si snídani a vyrážíme na hory a dál (pro neznalé to je heslo Hanibalu, které se nám skví na merino tričkách). V patách nám jsou Američani, se kterými se odteď budeme neustále potkávat. Volíme značenou cestu na Dom na Komni přes průsmyk Škrbina namísto původně plánované hřebenovky, která je schovaná v mlze. Chvíli stoupáme, chvíli jdeme po pěkné cestičce v údolí, načež znovu stoupáme a tentokrát až do mlhy. Rázem je zima, mrholí a vidíme prdlajs. Naštěstí zas brzy sejdeme níž. Potkáváme i první sněhové pole a první stádo krav se zvonci. Bohužel k Míšovu velkému znepokojení potkáváme i spoustu Bolševníků.</p>
        <p>Scházíme až do 1450 mnm a máme znovu výhledy na Bohinsjké jezero. Je tu už celkem teplo, tak nasazujeme kraťasy. Míjíme asi nejkrásnější část trasy, palouček Krošnja a po 5 hodinách chůze konečně přicházíme celí vyhladovělí do Domu na Komni. Stejně jako před rokem si tu dáváme zelňačku a po hodině odpočívání se znovu vydáváme na cestu. Ještě nás čekají 3 hodiny krásnou přírodou až k údolí Triglavských jezer. Tam se moc těšíme, protože jsme tam loni strávili noc v nouzové noclehárně. Cestu už známe, i když oproti loňskému dešti, mlze a brodění v půl metru sněhu se to nedá srovnávat.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Kolem půl sedmé konečně dorážíme do koči. K našemu překvapení je tu spoustu lidí! Rovnou dostáváme i večeři, a protože sprcha opět není, plánujeme na tajňačku skočit do jednoho z jezer kus od chaty, i když koupat se tu nesmí. Vyčkáváme správného momentu, a když jsme konečně sami, Šárinka se začne bleskově svlékat. Plavky s sebou samozřejmě nemáme. Míša má ale trochu jiné starosti…</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} />
        <p>Vykoupeme se ale stejně. A později slavíme s Borovničevcem, Jagodou a Malincou a usínáme jako dřeva.</p>
    </div>)
}, [img1, img2])
