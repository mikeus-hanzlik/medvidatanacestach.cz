import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/turbany.jpg";
import ArticleTitle from "../../articles/ArticleTitle";
import Image from "../../articles/Image";

const img1 = buildLightboxImage(img1Src, "Turbany na hlavě" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Bhulbhule - Chamche" date="Středa 2. 5." />
        <p>Ráno nás budí ruch v uličce pod okny už asi v 6 hodin. Místní vstávají s východem slunce a hned otvírají krámky, aby jim neutekl žádný kšeft. Vstáváme taky brzy a k snídani si objednáváme masala tea a oat porridge obohacenou o námi přivezené sušené ovoce a oříšky z Mixitu.</p>
        <p>Vyrážíme rekordně brzy, asi v 8:30. To, že jsme za okenicí zapomněli pověšenou čelovku, zjišťujeme až o 2 dny později a Šárinka to obrečí. ☹ Zpočátku jdeme podél řeky přes vesničky plné guest housů, o které tu opravdu nouze není. Kupujeme si výborné místní mini banánky, chutnají trochu jako kiwi. Čekají nás první houpací mosty přes krásnou modrozelenou řeku a spíš než v horách si připadáme jako v džungli. Postupně se začne cesta zvedat, přece jen tu kopce jsou. ☺ Stoupáme do Bahundandy, je vedro, jsme zpocení a rádi, když nahoře ve vsi nacházíme pumpu. Smočíme si ručníky a obtočíme si je kolem hlavy – rázem jsme neodolatelní.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Kus od vsi najdeme krásnou vyhlídku na okolní hory, políčka a údolí s řekou a dáváme si tu sváču. Po příjemné pauze opět scházíme dolů k řece, přecházíme ji a pokračujeme po šíleně prašné cestě prudce nahoru až do Jagatu. Pohorky máme dávno šedivé od toho prachu, a to ještě netušíme, že to tak bude téměř po většinu treku. Za Jagatem potkáváme malého nepálského klučinu s kamarádkou, jsou oblečení ve školní uniformě a zřejmě jdou ze školy domů do vedlejší vesnice. Kluk se s námi k našemu překvapení začne celkem bez problémů vybavovat anglicky. Jeho rodiče prý mají prý na konci Chamche krásný nový hotel, kde se musíme ubytovat. Jsme trochu skeptiční, ale zkusíme to, projdeme s klukem celou vesnicí a až na konci, nahoře na kopci, kam nejspíš žádní hikeři nedojdou, protože se ubytují v některém z bližších guest houstů, opravdu dojdeme ke krásnému novému barevnému International hotelu, kde se ubytujeme.</p>
        <p>Jsme tu tu noc jediní hosté a celkem si nás považují, tak je to fajn. Pokojík je pěkný rohový s okny na dvě strany, sprcha i turecké WC jakž takž. Večeři si dáváme na zahrádce nad řekou, večer už je trochu chladněji a v noci dokonce přichází pěkná buřina.</p>
    </div>)
}, [img1])
