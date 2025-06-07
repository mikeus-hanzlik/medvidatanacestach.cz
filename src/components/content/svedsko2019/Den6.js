import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/MooseGarden.jpg";
import img2src from "../../../images/svedsko2019/Parohy.jpg";
import img3src from "../../../images/svedsko2019/Orrviken.jpg";
import img4src from "../../../images/svedsko2019/MisaALos.jpg";
import img5src from "../../../images/svedsko2019/JaALos.jpg";
import img6src from "../../../images/svedsko2019/LosiCumak.jpg";
import img7src from "../../../images/svedsko2019/Los.jpg";
import img8src from "../../../images/svedsko2019/CestaDoFalunu.jpg";

import video1Src from "../../../images/svedsko2019/VideoLosi.mp4";


import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Moose Garden v Orrviken");
const img2 = buildLightboxImage(img2src, "Losí paroží");
const img3 = buildLightboxImage(img3src, "Orrviken");
const img4 = buildLightboxImage(img4src, "Míša a los");
const img5 = buildLightboxImage(img5src, "Já a los");
const img6 = buildLightboxImage(img6src, "Losí čumák");
const img7 = buildLightboxImage(img7src, "Los");
const img8 = buildLightboxImage(img8src, "Cesta do Falunu");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Na dosah losům" date="Sobota 16. 2." />
        <p>Ráno snídáme, dobalujeme poslední věci, doplňujeme dříví ke krbu a předáváme chatičku zpět paní domácí. Je nám trochu smutno, když odsud
            odjíždíme, bylo to neskutečné a oba doufáme, že se sem ještě vrátíme! A tentokrát už tu polární záři uvidíme. <Smile /></p>
        <p>Čeká nás dlouhý přejezd do Falunu, ale ještě předtím zamíříme kousek dál na sever do Moose Garden v Orrvikenu kousek od Östersundu. Našli
            jsme o tom zmínku v průvodci v naší chatičce a říkali jsme si, že vidět losa takhle zblízka musí být zážitek.</p>
        <p>Po příjezdu máme trochu problémy zaparkovat, nejdřív totiž vyjedeme přímo do areálu Moose Garden, ale pán nás pošle zpět na parkoviště
            dolů, které je opět celé totálně zledovatělé. Když pak šlapeme nahoru už po svých, musíme být pěkně ostražití, abychom se nerozsekali.
            Moose Garden sestává kromě zahrady ještě ze zázemí s WC, gift shopem a malou kavárnou vyzdobenou losími kožešinami a parožími. Chvilku tu
            lelkujeme, protože prohlídka začíná až o něco později, fotíme se s parožím, dáváme si kafe a okukujeme suvenýry, až si nakonec kupujeme
            losí chňapku na nádobí.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Kavárna se postupně zaplňuje, překvapivě tu je i v zimě docela dost návštěvníků. Jsou tu i nějaké otravné děti, co dělají bordel, držíme se
            od nich raději dál. Mají to tu na starosti 2 slečny a týpek, který je příbuzný s původním zakladatelem. Ten kdysi našel v přírodě 2
            opuštěná losí mláďata, kterým zemřela matka. Začal se o ně starat, dlouho to dělal jen sám pro sebe i s dalšími losátkami s podobným
            osudem. Až později zjistil, že by to mohlo mít turistický potenciál a tak vznikla moose garden. Ač se to tak možná nezdá, losi jsou dost
            nebezpečná zvířata. Proto v moose garden musí dbát na pečlivé sblížení s každým novým mládětem. Když se nějaké narodí, ošetřovatelé mu
            jsou po několik dní až týdnů nepřetržitě nablízku, aby si mládě myslelo, že je to jeho matka. Jen tak si na ně zvykne a neublíží jim.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
        <p>Po úvodním povídání následuje venkovní prohlídka. Největší challenge je sejít ledem pokrytou cestu z kopce k losímu výběhu. Losi k nám brzy
            přijdou, jsou tu 4, největší a nejstarší matka a 3 samci, z toho 2 mláďata. Bohužel ani jeden los nemá paroží, museli jim je upilovat, aby
            se vzájemně nenapadali. Můžeme si je pohladit i je nakrmit bramborama. Jsou nádherní a obrovští! Jsme rádi, že jsme je na běžkách
            nepotkali.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <figcaption>Losi v Moose Garden</figcaption>
        </figure>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3} />
        <Image lightboxImage={img5} openLightbox={openLightbox} index={4} />
        <Image lightboxImage={img6} openLightbox={openLightbox} index={5} />
        <Image lightboxImage={img7} openLightbox={openLightbox} index={6} />
        <p>Po prohlídce jedeme ještě na skok do Östersundu. Zaparkujeme u jezera poblíž parku Badhusparken. Zaplatíme jen asi na hodinku a jdeme se
            projít. Obhlídneme baráčky u jezera i parčík, kde se zrovna koná nějaká akce pro děti. Je pěkná kosa, tak zalezeme do prosklené kavárny a
            dáme si horkou čokoládu. To nám z poznávání Östersundu stačí a vyrazíme dál na asi pětihodinovou cestu, jejímž cílem je Falun.</p>
        <Image lightboxImage={img8} openLightbox={openLightbox} index={7} />
        <p>Cestou se stavíme na nákup zásob na další dny a do Falunu dorazíme až celkem pozdě večer. Musíme projet městem, pokračujeme nahoru podél
            parku a před jezerem odbočíme do kopce v lese. Míjíme krásné rodinné domky a ubytko podle pečlivého popisu majitelů celkem bez problémů najdeme.
            Náš byteček je nástavba nad garáží hned vedle vily hostitelů. Jsme nadšení, vypadá to ještě líp, než na fotkách! Krásná koupelna i s
            pračkou, komplet vybavená kuchyň s jídelnou a obývákem a útulná ložnice. Tady nám nic chybět nebude! Vyslechneme od pana domácího rady
            ohledně běžkařských tras ve skiareálu Lugnet, kde se jezdí MS na běžkách, a následně rovnou kupujeme online vstupenky na stadion. Nemůžeme
            se už dočkat! Dáváme si večeři, film a rum a jdeme do hajan.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6, img7, img8])
