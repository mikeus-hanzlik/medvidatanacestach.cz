import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import video1Src from "../../../images/nepal/taxiDoPokhary.mp4";
import img1Src from "../../../images/nepal/pokhara.jpg";
import img2Src from "../../../images/nepal/zLetadla.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Pokhara");
const img2 = buildLightboxImage(img2Src, "Himaláje z letadla");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Tatopani – Pokhara" date="Pondělí 14. 5."/>
            <p>Ráno nás oba bohužel bolí v krku. To snad není možný, my se toho nezbavíme. Zase prší a vymýšlíme, co
                dál. Máme několik možností. Buď pokračovat ve treku, s mokrýma pohorkama, bolavým krkem a deštěm, anebo
                to vzdát, zkusit si sehnat odvoz do Pokhary a strávit posledních pár dní před odletem tam. Od kamarádky
                (Bětko, děkujeme!) na dálku zjišťujeme, co se dá v Pokhaře dělat, a je toho prý víc než dost. Je tedy
                jasno. Nakoupíme si v pekárně dobrůtky, pobalíme se, seženeme taxíka a ten nás asi za 7 hodin doveze
                cestou necestou až do Pokhary, druhého největšího města Nepálu.</p>
            <figure>
                <video controls>
                    <source src={video1Src} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <figcaption>Cesta taxíkem do Pokhary</figcaption>
            </figure>
            <p>Je nám trochu líto, že to končí dřív, než mohlo. Ale na druhou stranu jsme rádi, že už budeme jen
                odpočívat. Později zjistíme, že Pokhara je k tomu jako stvořená. Je to úplně jiný svět než Káthmandú.
                Jsou tu asfaltové silnice, celkem čisto, hodně obchůdků se suvenýry a oblečením, spoustu kaváren a
                restaurací. Město navíc leží na břehu velkého jezera Phewa Lake a je tu i několik kopců, kam se dá
                vyrazit na výšlap. Za hezkého počasí je dokonce vidět Annapurna I., to se nám ale bohužel
                nepoštěstí.</p>
            <p>Potom, co nás tu taxikář vyhodí, najdeme kavárnu s wifinou a hledáme na internetu nějaký pěkný hotel.
                Vyhlídneme si Hotel Middle Path & Spa, který je krásný, docela luxusní, s parádní zahradou i střešní
                terasou a ještě lepšími snídaněmi. A zotavení může začít. Několik posledních dnů před odletem si tu
                pořádně užijeme. Jdeme na lodičku na jezero, na několik výletů, masáže, nákupy, večeře, dezertíky,
                drinky, no pecka. To, co jsme na treku zhubli, zase rychle nabereme. ☺</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Náš výlet je téměř u konce. Z Pokhary se v pátek brzy ráno přesouváme autobusem do Káthmandú. Přes
                tourist agency si objednáváme nějaký dražší, který má dokonce kufr na zavazadla a naše batůžky tak
                nemusí být na střeše. Cesta je ale i tak dost hrozná. Před víkendem jsou silnice ucpané a do hlavního
                města, které je vzdálené cca 200 km, nám to trvá asi 11 hodin. Olalá, máme toho dost. V sobotu letíme
                domů a slibujeme si, že si začneme naší civilizace pořádně vážit.</p>
            <p>Namasté!</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
        </div>)
}, [img1, img2])