import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/annapurny.jpg";
import img2Src from "../../../images/nepal/iceLake.jpg";
import img3Src from "../../../images/nepal/sprchaManang.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Výhledy cestou na Ice Lake");
const img2 = buildLightboxImage(img2Src, "Ice Lake");
const img3 = buildLightboxImage(img3Src, "Sprcha v Manangu");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Bhraga - Ice Lake - Manang" date="Úterý 8. 5."/>
            <p>Vstáváme brzy, v 7:00 snídáme, kupujeme čerstvé cinnamon rolky s sebou (ach, ta civilizace!), většinu
                věcí necháváme na recepci hostelu a kolem osmé vyrážíme směrem na Ice Lake. Čeká nás nějakých 1100 m
                převýšení. Ze začátku máme trochu problém najít cestu, ale zvolíme tu nejvíc do kopce a ukáže se, že to
                je ta správná. ☺ Šárince je špatně, tak je smutná a rozmrzelá, Míša se chce vrátit, ale hecneme se a
                postupně dokonce předháníme všechny výpravy, až na 2 běžce, které potkáme cestou dokonce dvakrát. Zřejmě
                trochu jiná liga… Cestou máme výhledy na Annapurny, Gangapurnu a Tilicho Peak nad jezerem Tilicho Lake
                ve výšce 4900 mnm, ke kterému máme v plánu jít za pár dní.</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Asi hodinu pod vrcholem potkáváme chýši s „restaurací“ a potom i kemp plný stanů, o kterém se později
                dozvíme, že tu bydlí Nepálčani, co sbírají jakési kořeny vzácných rostlin, které pak prodávají Číňanům
                za velké prachy. Výšlap nám nakonec trvá asi 4 hodiny a není to tak hrozné, i když jsme v té výšce
                trochu malátní. Ice Lake je krásně modré jezero ve výšce cca 4600 mnm, o kousek výš už je sníh. Jsme tu
                skoro sami. Posvačíme, pofotíme a protože se stejně jako o den dřív sbíhají tmavá mračna, dáme se na
                ústup. Annapurny už jsou schované v mracích a vypadá to, že u Tilicho Peaku snad sněží, na obzoru jsou
                to samé bílé mraky.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
            <p>Něco po třetí odpolední jsme zas zpět v hostelu, dáme jídlo (zdravím Verču, jestli to čte), přebalíme
                věci a s plnou polní vyrážíme do 2 km vzdáleného Manangu, centra oblasti. Docela to tu žije, je tu
                spoustu obchodů, guest housů a dokonce zpevněný chodník. Ubytujeme se v New Tilicho guest housu, který
                má být podle referencí od náhodné holky odchytnuté na ulici super, prý má wifi i hot shower. Shower je
                opravdu super, možná i nejlepší v Nepálu, ale wifi nefunguje, to už je taková nepálská klasika.</p>
            <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
            <p>Dining hall je plná lidí a krásně vytopená, dneska nám snad zima nebude! Míša si dopřává yak steak a
                Šárinka obligátní curry, ale není to nic extra. Po celý zbytek večera leje, tak jsme rádi, že jsme
                schovaní. Promýšlíme, co podnikneme další dny. V Manangu se dá dělat dost věcí, je tu i kino a lékař,
                tak bychom tu mohli zůstat 2 dny a odpočívat a léčit se. Ale v současném guest housu se nám moc nelíbí,
                tak budeme spíš pokračovat pomalu dál směrem na Tilicho lake.</p>
            <p>Večer si zalezeme do pokojů, oproti jídelně je tu slušná kosa. Nabalíme se, zalezeme do spacáků a před
                spaním čteme.</p>
        </div>)
}, [img1, img2, img3])