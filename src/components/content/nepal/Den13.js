import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/suchaZem.jpg";
import img2Src from "../../../images/nepal/dhaulagiri.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Zpátky v suchu");
const img2 = buildLightboxImage(img2Src, "Dhaulagiri, 8167 mnm");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Jomsom – Kalopani" date="Sobota 12. 5."/>
            <p>Krásně se vyspíme, nasnídáme a máme radost, když v Jomsomu potkáme pěkný civilizovaný obchůdek, kde mají
                opalovací krém (jsme trochu připečení a náš nám došel), pořádné několikavrstvé papírové kapesníky (kdo
                nebyl v Nepálu nastydlej, nepochopí) a muffiny! Mňam! Vyrážíme na další část Annapurna Circuit treku.
                Bohužel je to ta méně hezká, ale taky mnohem méně frekventovaná část treku. Z turistů nepotkáváme
                nikoho, nejspíš to všichni v Jomsomu zalomí. My jsme držáci, tak pokračujeme po svých. Šárinka má ze
                smrkání a mrazu a sluníčka odřený, omrzlý a zároveň spálený nos, no je to dost zážitek, radši chodí celý
                den s rouškou, aby si ho nepřipekla ještě víc. Sluníčko tady totiž zase peče. Jsme už jen v 2700 mnm a
                po několika dnech jsme znovu z batohu vytáhli kraťasy a tílka.</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Tady dole vede původní trasa Annapurna Circuit treku po cestě pro auta a motorky, ale je tu i
                alternativní, nově značená Annapurna Circuit, která vede po druhé straně řeky pěšími stezkami. Dnes taky
                spatříme Dhaulagiri, sedmou nejvyšší horu světa. O ní si prý dlouho mysleli, že je úplně nejvyšší,
                protože je vidět už tak nízko, jako jsme my teď (cca 2500 mnm) a tím pádem vypadá fakt velká.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Plánujeme se ubytovat v Larjungu nebo Kokhethanti, ale narazíme na nečekaný problém. Protože jsme na nové straně Annapurna treku, nejsou tu ještě skoro žádné ubytovací kapacity, všechno je na té původní straně, kde je i silnice. Ale tam my nejsme, řeka je daleko a mosty skoro žádné. Nakonec musíme vydržet až do Kalopani, kde se obě strany treku na chvíli spojují. Musíme tedy uťapkat skoro 25 km, no máme toho večer docela dost a za odměnu se ubytováváme v luxusně vypadajícím hotelu s krásnou restaurací.</p>
        </div>)
}, [img1, img2])