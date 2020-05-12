import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/MyVeStockholmu.jpg";
import {buildLightboxImage} from "../../helpers/imageHelper";
const img1 = buildLightboxImage(img1src, "Stockholmské selfíčko");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Z Falunu do Stockholmu" date="Pondělí 18. 2." />
        <p>Ráno snídáme, balíme a opět s veškerou bagáží vyrážíme na běžky. Těším se, že si tentokrát objedu patnáctku - tu nejdelší a nejtěžší trať,
            která tu je. Jezdí ji muži v závodech světového poháru. A je to znát! Pořád jen nahoru dolů, hodně prudké sjezdy, výjezdy i zatáčky. Úplně
            se mi klepou nohy! Počasí je už podstatně horší. Sejdeme se zpět u auta, převlékáme se do civilu a vyrážíme na asi tříhodinovou cestu do
            Stockholmu. Juchů!</p>
        <p>Když jsme hledali airbnb ve Stockholmu, všechno bylo dost drahé. A my jsme navíc potřebovali něco s místem na parkování. Nakonec jsme
            sehnali malý baráček vedle vily na zahradě majitelů u konečné stanice metra Mörby Centrum kousek od Universitetet, kde jsem
            bydlela na Erasmu. Přijíždíme v odpolední špičce, poslední část řídím já a docela se přitom zapotím. Baráček, ve kterém se ubytujeme, je
            hodně maličký, ale je tam všechno, co potřebujeme, až na takovou jednu nezbytnost - toaleťák, na který majitel zapomněl, ale později nám
            ho naštěstí donesl. Mrňavá koupelna, obývák s minikuchyňkou a schody nahoru do ložnice, což je jen takové vyvýšené patro, kde se musíme
            hodně krčit, abychom prolezli.</p>
        <p>Jen co si trochu odfrkneme, vyrážíme do města. Jedeme hned do centra, kde vystoupíme na stanici Gamla Stan a naše první kroky míří do
            restaurace Vapiano. Posilněni se vydáváme prozkoumat centrum a já pátrám v paměti, jaká ulička kam vede. Těch pár let, co jsem tu nebyla,
            je docela znát. <Smile/></p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />

    </div>)
}, [img1])