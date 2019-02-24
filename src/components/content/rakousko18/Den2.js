import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import Smile from '../../icons/Smile';
import img1src from "../../../images/rakousko18/SpaciMístoPrvniNoc.jpg";
import img2src from "../../../images/rakousko18/Vyrazime.jpg";
import img3src from "../../../images/rakousko18/Grossglockner.jpg";
import img4src from "../../../images/rakousko18/LouceniSGrossglocknerem.jpg";
import img5src from "../../../images/rakousko18/ZaSedlem.jpg";
import img6src from "../../../images/rakousko18/VyhledOdStanu.jpg";
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/rakousko18/ZVyhlidky.mp4";

const img1 = buildLightboxImage(img1src, "Vstávat a cvičit");
const img2 = buildLightboxImage(img2src, "Vyrážíme");
const img3 = buildLightboxImage(img3src, "Grossglockner");
const img4 = buildLightboxImage(img4src, "Pózování s Grossglocknerem");
const img5 = buildLightboxImage(img5src, "Sníh nás nemine");
const img6 = buildLightboxImage(img6src, "Výhled od stanu");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Kolem Grossglockneru" date="Sobota 28. 7."/>
        <p>Spíme jako dřeva a budíme se do nádherného rána. V noci se vypršelo a obloha je bez mráčku! Vstávat do
            takového počasí je vyloženě radost. Pomalu balíme a děláme si snídani. Ze stezky na nás vidět není, ale když
            se postavíme a rozhlédneme, občas zahlédneme nějaké závodníky. V noci nás nerušili vůbec, dnes je asi trochu
            potkávat budeme.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Vyrazíme na cestu, a i když jsme původně nebyli z trailu nadšení, jakmile začneme na úzké stezce závodníky
            potkávat, nezbyde nám nic než obrovský obdiv. Později si o závodu přečteme, že nejdelší trasa má 110 km,
            převýšení 6500 m, startuje se v pátek večer a nyní mají borci poklusávající kolem nás v nohách kolem 40 km.
            Těm nejlepším mužům vše zmáknou za 14 a půl hodiny, ženám o dvě a půl hoďky více. Mimochodem, traťové
            rekordy mužů i žen padnou tento rok, určitě k tomu přispěje i nádherné počasí a naše přítomnost! Kromě trasy
            dlouhé 110 km je možné se vydat i na trasu dlouhou 75, 50 nebo 30 km. Přidá se k nám příště někdo? <Smile/>
        </p>
        <p>Asi po hodině chůze víceméně po vrstevnici se před námi rozprostře pohled na chatu Salmhütte a hlavně
            majestátní Grossglockner, jehož vrcholek se válí v mracích. U chajdy je jeden z checkpointů trailu, někteří
            závodníci se tu občerstvují, odpočívají, fotí si Grossglockner, my prohodíme pár slov s jedním z místních
            Rakušáků, který tu na vše dohlíží. Povídá nám něco o variantách výstupu na Grossglockner, od Salmhütte vede
            jedna z cest. Třeba se tam jednou taky vyšplháme, ale na to už je třeba trochu více vybavení než jen pohorky
            a krosny.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Pokračujeme přes potůčky dále, kde se naše trasa s tratí trailu rozděluje. Čeká nás krátké prudké stoupání na
            plácek nad údolím s chatou, odkud je luxusní výhled. Potkáváme tu pár svišťů, jinak nikde nikdo. Je tu
            dokonce i lavička, tak si dáme na chvíli pauzu. Je úplně nádherně, nechce se nám věřit, jaké máme tentokrát
            štěstí na počasí. Většinou když spolu někam jezdíme, bývá hnusně, zima a déšť, ale Rakousko se nám v tomhle
            zatím dost daří. Jak loni na Dachsteinu, tak i letos si nemůžeme stěžovat (zatím).</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Panoramata s Grossglocknerem</figcaption>
        </figure>
        <p>Později si dáme v Glorer Hütte obídek. Už jsme ve výšce 2650 mnm. Pokračujeme dál a dál, chvíli nahoru, pak
            zase dolů, s krásnými výhledy na okolní hory, nikde nikdo. Kde ty lidi jsou, když ne tady?!</p>
        <Image lightboxImage={img4} openLightbox={openLightbox}/>
        <p>Nakonec prudkým výstupem vyšplháme až na hřeben ve výšce 2900 mnm, kde najdeme i plechový bivak, kam se dá
            asi v případě nouze schovat, vevnitř je palanda na spaní a dokonce i deky na přikrytí, učiněný luxus!</p>
        <Image lightboxImage={img5} openLightbox={openLightbox}/>
        <p>Od bivaku znovu klesáme a za chvíli už v dálce pod sebou vidíme Elberfelder Hütte, k ní nám to ale ještě pár
            hodinek potrvá. O trochu níž si u potůčku dáme sváču, v ledové vodě si cachtáme nohy a provedeme základní
            hygienu. Přemýšlíme, kde budeme spát, už je asi 6 odpoledne. Původně jsme doufali, že dojdeme dál, ale jde
            nám to o něco pomaleji a vypadá to, že trasu, kterou jsme měli v plánu, nestihneme. Studujeme mapu, naštěstí
            je variant na zkrácení dost, a když nedojdeme až k autu, snad se nám podaří se s někým svézt.</p>
        <p>Kolem Elberfelder Hütte se nám spát nechce, aby nás nikdo neviděl. Podle mapy by ale několik kilometrů nad
            chatou, ve výšce cca 2700 mnm, měl být kus od značené cesty další bivak. Pokračujeme tedy pomalu dále. Trasa
            vede kolem chaty, což by ale znamenalo zbytečně sestoupat do 2350 mnm a potom znovu lézt nahoru. Rozhodneme
            se, že to střihneme někde mimo cestu srázem a třeba někde najdeme místo na spaní. Je to trochu risk, ale
            nakonec nám to vychází. Jdeme pomalu a brutálně do kopce, ale po nějaké době opravdu vyšplháme na
            rovinatější část a nakonec najdeme moc pěkný plácek, o hodně výš nad cestou, takže se nemusíme bát, že by
            nás někdo viděl, zato s krásným výhledem na hory. Je nejvyšší čas, pomalu osmá hodina, počasí se kazí,
            padají mraky a nakonec i prší, jsme rádi, když stihneme postavit stan a udělat si večeři jakž takž v
            suchu.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox}/>
    </div>)
}, [img1, img2, img3, img4, img5, img6])
