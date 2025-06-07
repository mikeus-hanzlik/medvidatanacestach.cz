import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko17/RibcevLaz.jpg";
import img2Src from "../../../images/slovinsko17/Bled.jpg";
import img3Src from "../../../images/slovinsko17/Lublan.jpg";
import img4Src from "../../../images/slovinsko17/Hrad.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Ribčev Laz");
const img2 = buildLightboxImage(img2Src, "Výhled na Bled");
const img3 = buildLightboxImage(img3Src, "Řeka v Lublani");
const img4 = buildLightboxImage(img4Src, "Lublaňský hrad");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Ukanc - Bled - Lublaň" date="Neděle 16. 4."/>
        <p>Navzdory předpovědi se probouzíme do pěkného dne. Pobalíme, check-outujeme se (musíme přitom do vesnického
            bankomatu, protože neberou karty), tajně si vyfotíme Borovničevce, abychom si ho mohli později koupit a
            vyrážíme do vesničky Ribčev Laz na břehu Bohinjského jezera. Je tu fotogenický most a kostel a pěkný výhled
            na jezero. Parkování pankujeme bez placení, snídáme čokoládového zajíce z Pralinky, fotíme se a jsme rádi,
            že je hezky.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Další zastávkou je Bled a vyhlídka nad jezerem. Jsme tu naštěstí ještě celkem brzy, tak se i vejdeme na
            „parkoviště“ na kraji pole pod lesem. Pak už musíme do pěkného krpálu po svých. Pěkně ženeme, protože se
            stahují mračna, a my chceme nahoře stihnout sluníčko. Takže nejspíš trhneme rekord a všechny ostatní turisty
            necháváme za zády. Výhled je krásný, fotíme se a po návratu k autu jedeme podél jezera pod hrad.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Bled je jedno z těch míst, které na Instagramu vypadá nádherně, ale ve skutečnosti je tu spoustu lidí, takže
            se nám tu tolik nelíbí. Bohinj je mnohem hezčí, přitom jen kousek odsud. Na parkovišti pod hradem asi 20 min
            koumáme, jak zaplatit. Mají tu chytrý návod na poslání SMSek, nám to ale nefunguje. Nakonec se Šárka vydá do
            hospody nedaleko sehnat drobné a platíme pěkně postaru.</p>
        <p>Vyšlápneme si nahoru k hradu, kde nic moc není a dovnitř chtějí vstupné. Na to kašleme a raději jdeme na oběd
            dolů do restaurace, kterou jsme si našli na Foursqure. Pošmákneme si úplně královsky! Pak to máme tak akorát
            zpět k autu, než nám vyprší parkování a konečně vyrážíme do Lublaně.</p>
        <p>U hostelu parkujeme vedle auta s (jak jinak) českou SPZ. Čekáme na check in a popíjíme Jägera v petce, aby to
            nebylo moc nápadné. Po chvíli vyfasujeme barevný pokojík, kde jen necháme věci a vyrážíme do města, abychom
            ještě stihli sluníčko, mraky nás opět dohání. Do centra jdeme kolem rodinných vilek a později uzounkými
            uličkami se starými baráčky. Všude je klid! Když dojdeme k řece, naskytne se nám pohled na hrad na kopci
            před námi.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        <p>Pokračujeme podél řeky, kde je spoustu zahrádek, restaurací a kaváren. Jsme překvapení, jak je to tu hezké.
            Protože je i docela teplo, u jednoho stánku neodoláme a dáme si úplně luxusní čokoládovou zmrzlinu.
            Mňam!</p>
        <p>Projdeme pár uliček, koukáme po obchůdcích a nakonec zamíříme nahoru na hrad. Stihne nás slejvák, ale
            naštěstí to netrvá moc dlouho. Původně středověký hrad byl komplet zrekonstruovaný asi před 50 lety, takže
            vypadá celkem moderně. Uděláme pár fotek a vracíme se zpět dolů. Počasí se naštěstí zas umoudřilo. Sháníme
            magnetku na lednici a později s pomocí Foursquare najdeme moc hezkou vinárnu, kde si dáme vínečko s olivami
            a později i večeři. Venku už zas pěkně leje.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3}/>
    </div>)
}, [img1, img2, img3, img4])
