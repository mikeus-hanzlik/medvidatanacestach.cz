import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/danagyu.jpg";
import img2Src from "../../../images/nepal/latamarang.jpg";
import img3Src from "../../../images/nepal/manaslu.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Výhled na Manaslu z guest housu v Danagyu");
const img2 = buildLightboxImage(img2Src, "Opuštěný Latamarang");
const img3 = buildLightboxImage(img3Src, "Manaslu přes dalekohled");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Danaqyu - Chame" date="Pátek 4. 5."/>
            <p>Ráno se Šárinka bohužel budí s bolestí v krku. ☹ To snad ne! Výhled z terasy na zasněžené mountains,
                které se ještě večer schovávaly v mracích, nám ale zvedne náladu. Až později zjišťujeme, že hora, na
                kterou jsme z pokoje viděli, byla osmitisícovka Manaslu…</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Snídáme venku tradiční masalu a oat porridge. Cestou do Chame máme na výběr jít delší, anebo kratší a
                údajně i hezčí stezkou podél řeky přes opuštěnou osadu Latamarang. Volíme druhou možnost, ale brzy
                litujeme. Evidentně tudy nikdo nechodí, cesta není značená ani vyšlapaná, protože vede přes srázy nad
                řekou, které jsou často důsledkem zemětřesení a sesuvy půdy zbořené a je tedy nutné je složitě obcházet
                (nebo spíš obešplhávat) trním a kopřivami. Zklamání nám trochu kompenzuje Latamarang, což je město duchů
                s několika zarostlými, opuštěnými a rozpadlými baráčky a parádním výhledem na hory kolem. Svačíme u
                krásné modré řeky s obrovskými balvany, kde si v písečné zátoce koupeme nohy. Víc nám ta jen
                několikastupňová teplota vody nedovolí.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
            <p>Procházíme vesničkou Koto, kde je další checkpoint a u něj dokonce i fronta. Už jen kousek odtud je
                Chame, větší vesnice se spoustou guest housů, stánků se vším možným a dokonce i horkými prameny na
                koupání. V med pointu kupujeme Strepsils na bolavý krk a ubytujeme se v honosně pojmenovaném Royal
                Garden Hotelu. Vyfasujeme pokojík s výhledem na hory, ale bohužel i skládku za hotelem. Poprvé na treku
                máme evropské WC, ale tentokrát jsme bez sprchy.</p>
            <p>Večer trávíme v jídelně, kde nám i zatopili a hádáme, co by to tak mohlo být za horu, kterou vidíme z
                okna na konci údolí. A hle, ona je to osmitisícovka Manaslu, 8. nejvyšší hora světa! Kocháme se pohledem
                i dalekohledem a dochází nám, že to byla ona, kterou jsme zahlédli už v Danagyu. Kromě Manaslu
                obdivujeme i Lamjung Himal (necelých 7000 mnm), která je nám podstatně blíž. To jsou konečně ty pravé
                mountains!</p>
            <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        </div>)
}, [img1, img2, img3])