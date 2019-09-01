import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D11_narozky.jpg";
import img2Src from "../../../images/norsko2017/D11_snih.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/norsko2017/D11_snezi.mp4";
import video2Src from "../../../images/norsko2017/D11_Prosecco.mp4";

const img1 = buildLightboxImage(img1Src, "Happy birthday to me");
const img2 = buildLightboxImage(img2Src, "Tady už jsem toho měla plný zuby");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Sníh a párty ve stanu" date="Pátek 15. 9. 2017"/>
        <p>Nadešel významný den, a to moje dvacetiny. <Smile/> Byla jsem zvědavá, jestli si na to Míša vůbec vzpomene. A on
            byl úplně úžasnej, ráno vstal dřív než já s tím, že se jde vyčurat. Docela mu to trvalo a když se konečně
            vrátil, já byla zachumlaná ve spacáku. Ale když jsem se otočila, úplně jsem vyvalila oči. Míša mi přinesl
            snídani do postele, na talířku byl čokoládový dort se zapálenými svíčkami s nápisem Happy birthday a k tomu
            jsem dostala, světe div se, i kytičku! No bylo to nádherný. Byla jsem u vytržení, kde to tu Míša sehnal, a
            jak to zařídil…</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}>
            <Smile/>
        </Image>
        <p>A to ještě nebylo všechno, dostala jsem i dárky! Byla jsem vykulená, protože jich bylo hodně a byly úplně
            parádní. Dostala jsem dvoje Kari Traa kalhotky s nohavičkama a pleteného kulicha s bambulí, který se mi do
            Rondane dost hodil. Přesně to jsem si přála. <Smile/> K tomu jsem ještě dostala lístky do divadla, let balónem a
            wellness pobyt v Lednici. Pecka! Už dlouho jsem si říkala, že bychom mohli jet i někam jinam než pod stan a
            takhle se nám to brzy splní. Byla jsem úplně nadšená. Děkuju!</p>
        <p>Po takovém krásném ránu jsme si pobalili věci do batůžků a vyrazili na tůru. V plánu jsme měli vylézt na pár
            okolních dvoutisícovek, ale nakonec to bylo náročnější, než jsme si mysleli. Cestou se docela změnilo
            počasí, vylezli jsme pěknej stoupák do mraků a začalo sněžit. Nejdřív jsem měla radost, jéé, sníh na moje
            narozky, to mám jako dárek! Ale časem to přestala být legrace, čím výš jsme lezli, tím víc sněhu bylo. Ta
            první dvoutisícovka byla vlastně halda kamení pokrytého sněhem a pěkně to klouzalo. Začala jsem být trochu
            naštvaná, v jednu chvíli mi i zajela noha mezi šutry a nemohla jsem ji vytáhnout.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Sněží!</figcaption>
        </figure>
        <p>Když jsme se konečně vyškrábali nahoru, bylo tu úplně bílo. Jen sníh, mlha a žádné výhledy. Bylo jasné, že
            když půjdeme i na druhou dvoutisícovku, jak jsme měli původně v plánu, o nic víc neuvidíme. Udělali jsme si
            aspoň selfíčko v mlze a vyrazili dolů. Pro mě to byl trochu horor, pěkně to klouzalo, bála jsem se, že se
            někde rozsekám a byla jsem dost protivná.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Naštěstí jsme to ale zvládli a sešli jsme až zpět do údolí k potoku. No a potom – začalo lejt! Aby toho
            nebylo málo. Nemohli jsme se ani nasvačit v tom dešti, měli jsme sice pěknej hlad, ale pokračovali jsme až k
            chatě, kam jsme se vrátili po asi 5 hodinách a 12 km. Plně jsme využili sušárnu, která byla úplně luxusní,
            byly tu věšáky a foukal tu teplý vzduch. Potom jsme zevlili ve stanu, bouchli jsme si Prosecco, které jsme s
            sebou táhli, dali si k tomu sušené maso a užili si luxusní oslavu narozenin ve stanu. <Smile/> Později jsme se šli
            znovu plácnout přes kapsu a dali si v chatě ještě na zahřátí kakao, čaj a Míša i nějakou banánovou
            bábovku.</p>
        <figure>
            <video controls>
                <source src={video2Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Oslava ve stanu</figcaption>
        </figure>
        <p>Večer se Míša rozhodl, že se půjde vykoupat do jezera, já jsem tak odvážná tedy nebyla. Bleskově skočil
            dovnitř a stejně bleskově zas vylezl, protože to byla ještě větší ledárna než v Jotunheimenu. Já jsem
            zůstala věrná horké sprše. <Smile/></p>
    </div>)
}, [img1, img2])
