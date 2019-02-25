import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import ArticleTitle from "../../articles/ArticleTitle";
import Image from "../../articles/Image";
import Smile from "../../icons/Smile";
import {buildLightboxImage} from "../../helpers/imageHelper";
import img1src from "../../../images/rakousko18/VyhlidkaNaHeiligenblut.jpg";
import img2src from "../../../images/rakousko18/JezeroMargaritzenstausee.png";
import img3src from "../../../images/rakousko18/SarkaAGrossglockner.jpg";

const img1 = buildLightboxImage(img1src, "Vyhlídka na Heiligenblut");
const img2 = buildLightboxImage(img2src, "Margaritzenstausee");
const img3 = buildLightboxImage(img3src, "Šárka a Grossglockner");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Zase hory" date="Pátek 27. 7."/>
        <p>Oficiálně se v NP nesmí spát nadivoko, ale rozhodneme se tohle pravidlo trochu opomenout. Půjdeme natěžko,
            takže znovu přichází čas na naše velké Osprey krosničky a stan. Při cestě do Slovinska se nám osvědčil brzký
            ranní výjezd v 5, a tak si ho opakujeme. Cesta probíhá bez problémů, Waze nás vede nejkratší cestou do
            vesničky Winkl u Heiligenblutu, což je údajně jedno z nejhezčích městeček v Alpách. Jsme trochu překvapeni,
            když nás asi hodinu před cílem potkává mýtná brána. Napojujeme se totiž na tzv. Grossglockner High Alpine
            Road a chtějí po nás 36 euro. Moc se nám nechce, ale nakonec vůbec nelitujeme. Je krásně a tahle horská cca
            50 km dlouhá silnička se klikatí mezi alpskými vrcholky a ledovci. Je tu spoustu odpočívadel, zastavujeme,
            fotíme, kupujeme obligátní magnetku a dalekohledem sledujeme okolí. Parádní alternativa pro někoho, kdo
            nechce lézt po horách po svých.</p>
        <p>Kolem jedné odpolední parkujeme Obludu na kraji Winklu, odkud začíná turistická stezka Alpe Adria Trail. Máme
            toho po dlouhé cestě docela dost, ale převlíkáme se, nasazujeme krosny a vyrážíme. Jsme zhruba 1400 mnm
            vysoko a hned od začátku nás čeká pěknej stoupák. Míjíme vyhlídku na Heiligenblut, opuštěné chajdy na
            louce a básníme o tom, jak bychom tu taky chtěli mít chatu. Podle mapy by kousek od začátku měly být
            vodopády Leiterfall, nakonec se tam ale šouráme docela dlouho. Skoro jsme zapomněli, o kolik pomaleji se s
            těžkýma krosnama jde!</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Asi po 6 km a cca 3 hodinách konečně přicházíme k přehradě Margaritzenstausee, bodu s nejdelším názvem na celé
            naší trase. <Smile/> Původně tu někde kolem chceme spát, ale pořád sem doléhá dost hluk a z High Alpine
            Road, tak pokračujeme dále do kopce. </p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Lidí moc nepotkáváme, a když, tak jdou vždy v opačném směru, protože kdo by se takhle v podvečer chystal do
            hor, že jo. Místo lidí ale začneme potkávat zářivé praporky zapíchané vedle stezky. Že to není standardní
            značení cesty, nám dojde ve chvíli, kdy si na praporku všimneme nápisů Grossglockner Ultra Trail. Taky ty
            praporky mohli po závodě uklidit! Hmm, jedině, že by se to běželo teď o víkendu… Jakmile objevíme místo se
            signálem, googlíme a vygooglíme, že trail se opravdu běží tenhle víkend a start je ten den v 10 večer.
            Trochu smůla, snad nám trailisti v noci nebudou dupat kolem hlavy.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Krpál je celkem nekonečnej, sluníčko se pomalu začíná schovávat za hory a ochlazuje se. Navzdory krásným
            výhledům na Grossglockner Šárku už trochu bolí nohy a začíná fňukat. Když konečně přestaneme stoupat, pomalu
            se rozhlížíme po místě na spaní. Zpočátku to nevypadá moc nadějně. Jdeme stezkou vyšlapanou v prudkém svahu
            a nikde kolem nás to na rovný plácek nevypadá. Občas odbočíme do svahu a vyšlápneme pár metrů nad cestu,
            abychom se rozhlédli, jaká je situace tam, ale jakž takž přijatelné místo najdeme až po několika dalších
            kilometrech. I tak ještě musíme podklad poupravit, což nám zabere další půlhodinku, odkopeme drny, zahrabeme
            sviští noru kameny a vypolstrujeme si postýlku trávou. Postavíme stan, a abychom si uvařili večeři,
            potřebujeme vodu, která už nám skoro došla. Naštěstí opodál slyšíme potůček, vypravíme se tedy s vakem na
            vodu a filtrem za ním. Bohužel se ukáže, že je ještě o dobrých 150 výškových metrů výš, samozřejmě mimo
            jakoukoliv cestu. Nakonec je to výprava tam a zpět asi na hodinu.</p>
        <p>Večeře je vyloženě za odměnu! Máme v nohách sice asi jen 10 km, ale převýšení přes 1000 m a to po vstávání v
            5 ráno a dlouhé cestě autem. Dnes má být navíc úplné zatmění měsíce a k tomu vidět Mars. Původně jsme se
            těšili, jak to bude z Alp mimo civilizaci krásně vidět, vyzbrojili jsme se dalekohledem, ale sotva dojíme,
            začíná hřmít, fučet a pršet. Nezbývá nám než zalézt do stanu. Další zatmění bude v červnu 2029, to to určitě
            vyjde. <Smile/></p>
    </div>)
}, [img1, img2, img3])
