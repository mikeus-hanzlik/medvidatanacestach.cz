import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D13_Troli_stezka.jpg";
import img2Src from "../../../images/norsko2017/D13_kobra.jpg";
import img3Src from "../../../images/norsko2017/D13_fjord.jpg";
import img4Src from "../../../images/norsko2017/D13_vyhlidka.jpg";
import img5Src from "../../../images/norsko2017/D13_Briksdalsbreen.jpg";

import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Trolí stezka");
const img2 = buildLightboxImage(img2Src, "Pes hlavou nahoru");
const img3 = buildLightboxImage(img3Src, "Geiranger fjord");
const img4 = buildLightboxImage(img4Src, "Vyhlídka nad městečkem Geiranger");
const img5 = buildLightboxImage(img5Src, "Ledovcový splaz Briksdalsbreen");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Zpět na jih" date="Neděle 17. 9. 2017"/>
        <p>Bolest v krku bohužel neodezněla, ale zahřála jsem se kaší i čajem a začala cucat bonbony na bolení v krku. V
            plánu jsme dnes měli objet několik ledovcových splazů a dojet až kam to půjde. Prvním cílem byla Trolí
            stezka, což je klikatá silnička s výhledy. Auta tu skoro žádná nebyla, tak jsme se mohli i zastavovat a
            kochat. Pod námi byly v údolí mraky a na fotkách to vypadalo moc hezky. Vyjeli jsme až nahoru na vysokou
            stěnu a kolem byly ještě vyšší hory, což nás překvapilo. Bylo tu veliké parkoviště a působilo to dost turisticky, byl tu i souvenir shop, restaurace a chvíli po nás přijel autobus plný Norek. Byly
            to všechno jen ženský, tak jsme si říkali, jestli to je sraz feministek, svobodných matek, či co…</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Prošli jsme se trochu po okolí, bylo tu spoustu vyhlídek a cestiček, vyfotili jsme mě v další jogínské pozici
            a pokračovali jsme dál asi hodinu cesty, až jsme dojeli nad Geiranger fjord, což je největší fjord v Norsku
            a je i v UNESCO.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Nad fjordem byly krásné vyhlídky, pak jsme sjeli serpentinami dolů do města Geiranger. Potom jsme zas
            pokračovali nahoru a na jednom pěkném místečku s výhledem na hory a údolí jsme i posvačili.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox}/>
        <p>Cestou bylo nádherně a my jsme žasli, kolik je kolem krásných vysokých hor. Když jsme zrovna nejeli v tunelu,
            kterých tu bylo požehnaně, mohli jsme si krky vykroutit. Blížil se totiž další NP, Jostedalsbreen, s velikým
            ledovcem, a právě i několika ledovcovými splazy, kam jsme se chtěli podívat.</p>
        <p>Jeli jsme k nejznámějšímu ze splazů, Briksdalsbreenu. Cestou jsme jeli kolem několika jezer a koukali jsme,
            kde by se dalo zakempit, protože se pomalu, ale jistě blížil večer. Ke splazu jsme dorazili až docela pozdě,
            už tu nebylo moc aut, chvíli jsme i přemýšleli, že bychom si vzali krosny a přespali někde u toho splazu,
            jenže bychom museli platit dost za parkování, a navíc tu byl zákaz parkování přes noc. Bolelo mě
            k v krku a asi jsem měla i teplotu, ale ke splazu to byly jen 3 km a cesta byla celkem v pohodě. Šli
            jsme kolem jednoho vodopádu, až jsme došli ke splazu a ledovcovému jezírku, které bylo krásně zelené. Celkem
            nás ale šokovalo, jak ledovec za poslední roky brutálně ubyl. Oproti fotkám na Googlu to už vypadalo úplně
            jinak, podle fotek se ještě před pár lety dalo dojít až k ledovci, my bychom tam už nevyšplhali… To bylo
            docela smutné, ale veselé bylo, že tu zas nebyli žádní lidé.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox}/>
        <p>Cestou zpět jsme se stavěli v několika kempech u jezer, ale žádný se nám nelíbil, takže jsme pokračovali
            podél fjordu, ani tam se ale kempovat nedalo. Konečně jsme začali stoupat nahoru do hor, kde to vypadalo moc
            hezky a místo na stan by se tam určitě našlo, ale byla pěkná zima a jak mi nebylo dobře, moc jsem si neuměla
            představit, že budu další večer mrznout. Nakonec Míša našel krásné ubytko relativně cestou, kousek od jiného
            ledovcového splazu. Raději jsme tam ještě volali, jestli nevadí, když dorazíme později. Dojeli jsme asi
            v půl 9, byl to takový penzion a pár dalších chatiček, co tu provozovala rodina. Přivítal nás pán, ukázal
            nám náš pokojík s krásnou měkkou postelí a sdílenou kuchyňkou v jedné z chatiček. K večeři jsme si             udělali rýži a kuskus s chilli fazolema, což mi aspoň trochu ulevilo od bolesti v krku. Večer jsme si dali
            parádní horkou sprchu a padli jsme za vlast.</p>
    </div>)
}, [img1, img2, img3, img4, img5])
