import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D4_svaca.jpg";
import img2Src from "../../../images/norsko2017/D4_zatazeno.jpg";
import img3Src from "../../../images/norsko2017/D4_chajda.jpg";
import img4Src from "../../../images/norsko2017/D4_varime.jpg";

import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import video2Src from "../../../images/norsko2017/D4_video_mostek.mp4";

const img1 = buildLightboxImage(img1Src, "Sváča");
const img2 = buildLightboxImage(img2Src, "Míša ladí s karimatkou");
const img3 = buildLightboxImage(img3Src, "Chajda");
const img4 = buildLightboxImage(img4Src, "Chystáme delikatesu");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="První den v NP Hardangervidda" date="Pátek 8. 9. 2017"/>
        <p>…Jenže ráno zas Míša běhal na záchod. Ach jo. Posnídali jsme a pustili se do balení a uklízení chatičky.
            Vyrazili jsme až kolem půl 11, no ale co, máme prázdniny. Ještě jsme si dokoupili pár věcí, abychom několik
            dnů v divočině přežili v pohodě. Snažili jsme se přitom držet dietní stravy, takže jsme
            pořídili nízkotučný sýr, džem, banány.</p>
        <p>Brzy jsme odbočili na úzkou silničku směrem nahoru do hor, kde jsem si nevšimla třicítky a ani zpomalováků na
            cestě, takže jsem Míšovi trochu zvedla tlak a možná malinko vorvala podvozek. Chvíli jsme jeli kolem
            krásných baráčků a pak už to byla jen prudká a uzounká cesta přímo nahoru. V ostrých zatáčkách jsem si
            automatu začala velice vážit. Cestou jsme potkali velikej vodopád, kterej zuřil a cákal všude okolo. Jak
            jsme stoupali výš a výš, otevírali se nám krásné výhledy dolů do doliny s fjordy, odkud jsme přijeli, a na
            majestátní stěny všude okolo. A protože bylo podruhé v Norsku hezky, tak jsme i něco viděli!</p>
        <p>Dorazili jsme nahoru k parkovišti, které bylo skoro obsazené, mimo jiné tu byli i dva české tranzity. Nic se
            tu neplatilo, juchů! Nasadili jsme krosny a zjistili jsme, že jsou celkem těžké. Surprise! Tak jsme se
            vydali na cestou a ušli jsme ten den sice jen asi 8 km, ale moc se nám to líbilo. Příroda tu byla už dost
            podzimní, potkávali jsme spoustu keříků s borůvkama a brusinkama, stromy veškeré žádné. Potkali jsme
            všehovšudy jen několik lidí, z toho pár rybářů, od kterých Míša zjišťoval, co tu loví a jestli berou. Mimo
            jiné jsme s sebou totiž měli i prut, abychom si mohli na ohni opéct večeři (haha).</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Jak zpočátku bylo hezky, tak postupně se zatáhlo, honily se mraky a dost fučelo. Když jsme přišli k první
            chatě, která byla i na mapě označená, jakože se tam dá přespat, překvapilo nás, že kolem bylo ještě dalších
            asi 30 baráčků. Docela nás to překvapilo, nečekali jsme, že tu něco bude. Nikdo tu ale nebyl, tak jsme si u
            jedné z chajd na zahrádce sedli a posvačili.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        <p>Cesta hezky ubíhala, šlo se celkem po rovině, občas do kopce, víceméně podél velké řeky, až jsme dorazili k
            další velké chatě, která byla opět zavřená. Venku bylo spoustu pěkných plácků na spaní a i otevřená kůlna,
            kam by se v případě lijáku dalo schovat, ale bylo ještě docela brzy, tak jsme pokračovali dál. Čekal nás
            přechod před rozviklaný most přes řeku, která byla hodně rozvodněná a bylo vidět, že i hluboká.</p>
        <figure>
            <video controls>
                <source src={video2Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Chatrný mostek</figcaption>
        </figure>
        <p>Na druhé straně jsme objevili pěknou malou plážičku s velkými balvany, odkud by se dalo dobře chytat, tak
            jsme se rozhodli, že tu už zůstaneme. Kousek od řeky jsme našli zašantračené místečko mezi balvany a
            borůvčím, kde jsme i zakempili. Bohužel k večeři jsme museli sáhnout do zásob (pro změnu rejže s tuňákem),
            protože jsme nic nechytili, zato jsme málem nechali uplavat třpytku i prut, když jsem se pokoušela nahazovat
            já.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3}/>
        <p>Po večeři jsme chvíli seděli venku, navlečení skoro do všeho oblečení, co jsme měli, jenže to začalo vypadat,
            že se schyluje k dešti, takže jsme zalezli do stanu a nahrávali na voice recorder audio záznam našeho
            deníku. Potom jsme si šli ještě k řece vyčistit zuby a zahlídli jsme přitom na druhé straně dva lidi s
            čelovkama, co vypadali, že na nás koukají. Po chvíli se ale vydali na cestou opačným směrem, tak asi pohoda,
            společnost mít nebudeme.</p>
    </div>)
}, [img1, img2, img3, img4])
