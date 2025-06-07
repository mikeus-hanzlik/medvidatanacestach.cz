import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko17/Mlha.jpg";
import img2Src from "../../../images/slovinsko17/ZpetVUkanc.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Cestou na Dom na Komni");
const img2 = buildLightboxImage(img2Src, "Zpět v Ukanc");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Údolí sedmi Triglavských jezer - Ukanc" date="Sobota 15. 4."/>
        <p>Kluci vstávají už kolem osmé, tak nás vzbudí. Počkáme, až se trochu pobalí, abychom se v chajdě nepomlátili,
            a taky vstaneme. Nakonec zjistíme, že to jsou docela fajn týpci. Dělají si venku snídani, tak se k nim
            přidáme a oni nám nabídnou Legendario. Nemůžeme odmítnout!</p>
        <p>Venku je pěkná mlha, skoro není vidět ani na jezera kolem, natož na hory, ty jsou všechny schované v mracích.
            Snad se to časem rozpustí. Zvažujeme, kudy dál. Kluci se vrací zpět stejnou cestou, jakou šli nahoru, tedy
            tou naší. Bojí se experimentovat. My se nakonec rozhodneme držet naplánované trasy k Domu na Komni, kde
            bychom si mohli dát něco k snědku, protože by měla být otevřená. Odtud pak už jen sejít k Savica Waterfall a
            stejnou cestou k autu.</p>
        <p>Z noclehárny nakonec vyrážíme až kolem 12:00. Hned na začátku cesty potkáme pár, který jde od Dom na Komni.
            Ptáme se, jaká je cesta a podle týpka je moc pěkná. Trochu sněhu prý, ale jinak dobrý. Super! Vyrážíme s
            klidem, že nejdeme úplně naslepo a můžeme se držet stop. Bohužel postupně zjišťujeme, že týpek měl trochu
            zkreslený pohled. Sněhu je všude kotel, mlha přetrvává. Příroda je moc hezká a v létě to musí být parádní
            procházka. Když ale později začne lejt, je Šárka už trochu vzteklá. Nezbývá nám než se několik hodit brodit
            ve sněhu a moknout, než konečně dorazíme k Domu na Komni. Když vevnitř najdeme teplou jídelnu s milým panem
            domácím, jsme nadšení.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Vše mokré si svlékneme a dáme sušit ke kamnům. Pán nám půjčí bačkory. Dáme si horkou polívku (porce jako pro
            vola) a čaj a jsme spokojení. Později dokonce ještě dostaneme gratis 2 obrovské kusy domácích buchet, které
            ani sníst nemůžeme. Zevlíme a schneme tu asi 2 hodiny, než se konečně odhodláme pokračovat. Sice pořád prší,
            ale cesta dolů už utíká rychleji. Brzy zmizí i sníh. Dole na parkovišti u vodopádů dokonce potkáme kluky,
            kteří s námi nocovali. Cestou uděláme ještě pár fotek zamračeného a zamlženého okolí, abychom měli porovnání
            s azurovým včerejškem.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Když konečně dorazíme k penzionu, kde jsme den předtím snídali, zjistíme, že je obsazený. Přemýšlíme, kde
            tedy spát. Všechno máme mokré, tak se nám do stanu nechce a nakonec nacházíme přes booking ubytko v penzionu
            na druhé straně Bohinjského jezera. Dojedeme tam za chvilku a paní na nás už čeká. Dokonce nám na uvítanou
            nabídne paňáčka Borovničevce. A my se zamilujeme! Mňam! Ubytujeme se v malém pokojíku s koupelnou a konečně
            se vysprchujeme. Luxus! Potom vyrazíme na večeři do slovinské restaurace hned naproti. Neodoláme dalšími
            Borovničevci a k tomu si dáme nějaké místní speciality. Večer padneme a spíme jako dřeva.</p>
    </div>)
}, [img1])
