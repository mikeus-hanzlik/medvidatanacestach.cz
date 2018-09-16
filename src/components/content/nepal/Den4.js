import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/hanibal.jpg";
import img2Src from "../../../images/nepal/tal.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Cestou do vesničky Tal");
const img2 = buildLightboxImage(img2Src, "Koně za vesničkou Tal");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Chamche - Danagyu" date="Čtvrtek 3. 5."/>
        <p>Snídáme venku a během snídaně nás míjejí hikeři, kteří evidentně vstali dřív než my – Britové, Kanadský pár,
            co s námi jel autobusem, a další. Nenecháme se znervóznit a vypravujeme se s klidem o dost později. Tím
            zahajujeme náš nepálský standard.</p>
        <p>Nejdřív scházíme dolů k řece, přes houpací most přecházíme na druhý břeh a tam znovu stoupáme klikatou
            cestičkou, až se nám otevírají výhledy na hory. Tedy, pozor, podle Nepálčanů to jsou zatím jen hills (i když
            mají třeba kolem 5000 mnm), protože nejsou zasněžené. Zasněžené mountains nás čekají až o něco později.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Je pod mrakem, celkem dusno, a když se vyšplháme až do vesničky Tal v krásném údolí s modrozelenou řekou mezi
            horami, jsme ve výšce 2500 mnm. Na kraji vesnice si dáváme sváču, hodně fouká a trochu prší, oblékáme se a
            následně si v Safe drinking water station, kterých je na treku kolem Annapuren několik a mají za cíl
            podpořit místní a eliminovat odpad z petek, za 40 NRP / 1 l doplňujeme vaky na vodu. Sice jsme si mohli
            přefiltrovat vodu z řeky, ale tohle je jednodušší a aspoň uděláme tak dobrý skutek.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Pokračujeme krásnou stezkou podél řeky mírně nahoru. Potkáváme orly, krávy a kozy a osamocenou Alžířanku, se
            kterou se dáme do řeči. Zapisujeme se v prvním ACAP (Annapurna Conservation Area Project) check pointu v
            Dharapani, a to kvůli evidenci hikerů a bezpečnosti. Procházíme vesničkou Bagarchap, kde jsme původně chtěli
            spát, a nakonec končíme až v Danagyu. Alžířanka se ubytuje hned na začátku vesnice, my chceme podpořit i
            vzdálenější guest housy, tak si vybíráme ten zvaný Motherland a jsme tu zas až do rána úplně sami. Je tu i
            hot shower a wifi, přes kterou voláme domů. Večer zevlíme v dining roomu oblečení do péřovek, jsme už docela
            vysoko a pěkně přituhuje.</p>
    </div>)
}, [img1, img2])