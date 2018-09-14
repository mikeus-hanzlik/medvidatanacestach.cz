import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import video1Src from "../../../images/slovinsko/KozyNaPrsivci.mp4";
import img1Src from "../../../images/slovinsko/PlaninaPriJezeru.jpg";
import img2Src from "../../../images/slovinsko/Bohinj2.jpg";
import Image from "../../articles/Image";

const img1 = buildLightboxImage(img1Src, "Planina pri Jezeru" );
const img2 = buildLightboxImage(img2Src, "Po koupeli v Bohinjském jezeře" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Čtvrtek 5. 7. – Kosijev Dom - Ukanc</h1>
        <p>Spíme jako miminka asi 11 hodin. Vzbudí nás až budík kolem deváté a rychle pospícháme dolů na snídani, aby nám ještě něco dali. I když podle předpovědi má být hnusně, je zase krásně a sedáme si na zahrádku. Poprvé ve Slovinsku si můžeme dát k snídani i něco jiného než chleba, volíme musli s mlékem. Luxus!</p>
        <p>Vyrážíme až v půl 11 a pořád váháme, jestli dnes přespat ještě někde v horách, nebo sejít až dolů do údolí. Uvidíme asi podle situace. Čeká nás výživné stoupání na vrchol Pršivec, který má cca 1700 mnm a odkud jsou prý nejkrásnější výhledy na Bohinjské jezero a hory kolem něj. Asi jsme už namakaní, protože se nahoru vyškrabeme dokonce rychleji, než říkají ukazatele. Cestou máme krásné výhledy na Triglav i na jezero a už poněkolikáté si chválíme parádní počasí. I když cestou nebyli žádní lidé, na Pršivci je celkem plno. Turistů, ale hlavně – koz! Je jich tu tak 30. Jsou všude. Malé, větší, dokonce i jeden pěkně starý fousatý kozel. A jsou celkem dotěrné – hned se vrhají na Šárinku a olizují jí nohy ostošest. Dělají to prý kvůli soli, aby se jim lépe trávilo. Nejdřív to celkem příjemně masíruje svaly, ale když Šárinku jedna trochu kousne a další začne olizovat i zadek, radši prcháme. Ufff, doufáme, že se dneska vykoupeme.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <figcaption>Kozy na Pršivci</figcaption>
        </figure>
        <p>Další část trasy je víceméně lesem, až dorazíme k pěkné chajdě na louce. Odtud je to už jen kousek ke Koče na Planini pri Jezeru, kde jsme původně chtěli přespat. Bohužel jdeme fest z kopce, což znamená, že se cestou zpátky pěkně zapotíme. Přicházíme ke krásné louce s jezerem a chatou. V jezeře jsou bohužel sinice, tak se nevykoupeme, ale zato si dáme parádní oběd i s dezertem. Chvíli váháme, jestli tu zůstat do dalšího dne, ale protože jsou teprve asi 2 odpoledne a počasí vypadá dobře, rozhodneme se vyrazit zpět do údolí k Obludě.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Další zastávkou je Črno jezero, které už známe z loňska. Tenkrát se nám tu děsně líbilo, byl tu sníh, ledové kry se třpytily ve slunci a cinkaly o sebe navzájem, až z toho byla krásná přírodní zvonkohra. Byl to jeden z těch magických momentů, kdy chce člověk zastavit čas a užít si tu chvíli co nejdéle. Tentokrát tu žádný led není, zato je tu dost lidí, stahují se černá mračna a zlověstně hřmí, tak radši pospícháme dolů. Čeká nás totiž prudký sestup k vodopádu Savica, který by byl v dešti trochu o držku. Hřmí ale stále častěji a buřině se nakonec nevyhneme. Oblékáme nepromokavé oblečení a sestup naštěstí zvládáme bez úhony i v lijáku.</p>
        <p>Dole u vodopádů si dáváme v restauraci jídlo a zvažujeme, kde budeme spát. V úvahu přichází kemp v Ukanci u jezera, někde v lese na tajňačku ve stanu, nebo najít ubytko přes booking. Šárinka je pro stan, Míša pro ubytko. Přicházíme k Bohinjskému jezeru, už naštěstí moc neprší a nejsou tu lidi, tak shazujeme oblečení a jdeme si zaplavat. Voda je krásně teplá, o dost víc než v sobotu, když jsme přijeli. Kemp o kus dál je ale totálně narvaný Čechy, děsně nás to znechutí a nakonec volíme ubytko. Na bookingu najdeme apartmán v Bohinsjké Češnjici a vypravujeme se tam. Paní domácí nás srdečně vítá, večer vypijeme láhev vína a spořádáme sýr od Triglavských krav a Šárinku konečně přestává bolet v krku.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} />
    </div>)
}, [img1, img2])
