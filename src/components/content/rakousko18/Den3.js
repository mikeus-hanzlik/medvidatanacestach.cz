import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/rakousko18/Obed.jpg";
import img2Src from "../../../images/rakousko18/Mracna.jpg";
import img3Src from "../../../images/rakousko18/Ferrata.jpg";
import img4Src from "../../../images/rakousko18/JezirkaVSedle.jpg";
import img5Src from "../../../images/rakousko18/UdoliSChatouAJezery.jpg";
import img6Src from "../../../images/rakousko18/Koupel.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/rakousko18/Ovce.mp4";

const img1 = buildLightboxImage(img1Src, "Oběd u jezera");
const img2 = buildLightboxImage(img2Src, "Sauronův hněv");
const img3 = buildLightboxImage(img3Src, "Míša šplhá");
const img4 = buildLightboxImage(img4Src, "Jezírka v sedle");
const img5 = buildLightboxImage(img5Src, "Údolí s chatou a jezery");
const img6 = buildLightboxImage(img6Src, "Slastná koupel");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Pán prstenů: Dvě sedla" date="Neděle 29. 7."/>
        <p>V noci je nakonec dost hnusně, máme štěstí, že jsme schovaní pod stanem. Ráno je o dost chladněji než
            předchozí den a hory kolem jsou skryté v mracích a mlze. Pobalíme a vyrazíme. Musíme se seškrábat zpět dolů
            na cestu, což je chvílema trochu o držku, ale zvládneme to. Jdeme po obrovském kamenném poli, kolem dvou
            jezírek, u jednoho je dokonce i jakási jeskyně.</p>
        <p>Stoupáme k bivaku, kde jsme původně chtěli spát, ale je to ještě pěkný kus, to bychom za světla nestihli.
            Kolem nás není už žádná zeleň, jen skály a kameny. A fučí. Zatímco včera jsme šli v tílku a kraťasech, dnes
            máme i péřovky. Na hřebeni, kde se vrstevnice lámou, potkáváme dokonce pár lidí. Odtud budeme znovu klesat.
            Z 2700 mnm sestoupáme až do 2300, kde je spoustu oveček a krásné jezírko, kde si na vařiči uděláme oběd. K
            naší radosti se dokonce i docela trhají mraky. To je pohoda!</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Ovce vs. hůlka</figcaption>
        </figure>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Vymýšlíme, jak si naši trasu upravíme a vymyslíme, že vynecháme několik náročnějších přechodů hřebenů a místo
            toho půjdeme k Adolf-Nossberger-Hütte, kam jsme původně vůbec jít neměli. Někde přespíme a potom už jen
            sejdeme k vesnici Putschall asi 12 km od auta. Potom bychom měli mít dost času i na návrat zpátky do ČR.</p>
        <p>Sestoupáme do 2300 mnm, tak nízko, že tam znovu rostou kytičky. U potůčku s
            výhledem na Lienzer Hütte pod námi, kam jsme původně chtěli jít, si umyjeme nohy a znovu si dáchneme, načež
            nás čeká poslední výšlap tohoto výletu. Musíme se znovu vyškrábat do výšky 2800 mnm, odtud už to bude
            pohoda. Svítí sluníčko, ale nad okolními hřebeny se stahují pěkně tmavá mračna. Bojíme se, aby nás
            nechytla bouřka, tak se hecneme a nasadíme pořádné tempo.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Nejdřív stoupáme po trávě, pak po štěrku a nakonec už jen po šutrech. Společnost nám dělají ovečky kolem nás
            (dost jich je černých). Myslíme si, že nad námi vidíme sedlo na hřebeni, kam nás cesta povede, ale když
            vylezeme o kousek výš, zjišťujeme, že správné sedlo je ještě dál a výš. Už toho máme docela dost, Míša je
            zpruzelej a hladovej a Šárinka zas uhání, abychom to měli brzy z krku. Konečnou část cesty musíme zdolat
            pomocí lan, naštěstí to ale není žádná divočina.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        <p>V pozdních odpoledních hodinách se konečně vyšplháme až nahoru do sedla a před námi se otevírá kamenná
            planina s několika jezírky. Kolem nás je i trochu sněhu. Chvíli přemýšlíme, jestli se nevykoupeme, nikdo
            kromě nás tu není, ale než se rozhodneme, začne nám být zima.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3}/>
        <p>Schramstneme tyčinku a pokračujeme dále, teď už dolů. Cesta je tu opět jiná, než předtím. Všude jsou obrovské
            kusy skal a balvany, po kterých musíme lézt dolů. Pod námi je krásný výhled do údolí a na chajdu, ke které
            směřujeme. I když ji máme na dohled, cesta k ní nám ještě nějakou tu hodinku zabere. Míšu brzy začnou bolet
            kolena a je trochu mrzutej. Dohadujeme se, kde budeme spát. Variantou je i přespat v chatě, což kupodivu
            upřednostňuje Míša, Šárce se kvůli penězům a krásnému počasí (mraky nás nakonec nedohnaly) nechce. Šárka si
            z Míši dělá srandu, že je to slečinka. Kolem chajdy je plácků na spaní několik, ale nejde se nikam úplně
            schovat.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox} index={4}/>
        <p>V chajdě mají kupodivu volno a dokonce i přijmou náš slovinský horozelecký průkaz a dostaneme slevu!
            Vyfasujeme samostatný pokoj, i když je v něm více postelí. Ty aspoň využijeme k rozložení a usušení stanu a
            dalších věcí. Dáme si v jídelně moc dobrou večeři včetně dezertíku a po večeři se jdeme ven vykoupat. Šárka
            si to s koupáním záhy rozmyslí, se západem slunce totiž slušně přituhlo. Míša se neohroženě vlhá do spárů
            ledovcového jezera a podle výrazu na fotce si to vyloženě užívá.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox} index={5}/>
        <p>V noci opět leje, takže nakonec můžeme být vážně rádi, že jsme hezky v teple a suchu. Vyspíme se jako
            dudci.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6])
