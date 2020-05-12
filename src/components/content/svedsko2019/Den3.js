import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/VyrazimeNaBezky.jpg";
import img2src from "../../../images/svedsko2019/Stopa.jpg";
import img3src from "../../../images/svedsko2019/PoobedoveVinecko.jpg";
import img4src from "../../../images/svedsko2019/NaSkutru.jpg";
import img5src from "../../../images/svedsko2019/Stromy.jpg";
import img6src from "../../../images/svedsko2019/Hory.jpg";
import img7src from "../../../images/svedsko2019/MisaNaSkutru.jpg";
import img8src from "../../../images/svedsko2019/Aradalen.jpg";
import img9src from "../../../images/svedsko2019/ZapadSlunce.jpg";

import video1Src from "../../../images/svedsko2019/AradalenVideo.mp4";
import video2Src from "../../../images/svedsko2019/SkutrVideo.mp4";


import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Vyrážíme na běžky");
const img2 = buildLightboxImage(img2src, "Stopa jen pro nás");
const img3 = buildLightboxImage(img3src, "Poobědové vínečko");
const img4 = buildLightboxImage(img4src, "Poprvé na skútru");
const img5 = buildLightboxImage(img5src, "Výhledy ze skútru");
const img6 = buildLightboxImage(img6src, "Hory nad vesničkou Arådalen");
const img7 = buildLightboxImage(img7src, "Míša na skútru");
const img8 = buildLightboxImage(img8src, "Fučák v Arådalen");
const img9 = buildLightboxImage(img9src, "Před západem slunce");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Poprvé na sněžném skútru" date="Středa 13. 2." />
        <p>Dnes má být hezky a my jsme s paní domácí domluveni, že nám v 10 ráno půjde najet trať na desítku. Vstaneme kvůli tomu na budíka, uděláme
            si i svačinu a celí natěšení vyrážíme. Je opravdu sluníčko!</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Paní se trochu courá, vyráží až po desáté a my jedeme těsně za ní, v čerstvě vykrojené stopě. Bohužel ale na louce hned za lesem hodně fučí
            a stopa je hned zapadaná. Shodneme se tedy na tom, že nemá cenu najíždět desítku a paní nám objede jen čtyřku. Jsme trochu zklamaní, ale v
            tom vichru to vážně nejde. Jede se dobře jen v lesních pasážích, jakmile najedeme na pláň, bortíme se a sníh se nám hrozně lepí na
            skluznici. Nevzdáváme to ale, je nádherně, tak to za to stojí i tak. Několikrát si objedeme kratší okruhy, dáme si cestou sváču a užíváme
            si sluníčka i samoty. Opět nikoho nepotkáváme!</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} />
        <p>Na oběd se vracíme do chatičky, trochu se ohřejeme, dáme si vínečko a odpoledne se nabalíme jako pumpy a jdeme si od paní domácí půjčit sněžný
            skútr. To je pro nás oba novinka, ani jeden jsme na něm ještě nejeli. Paní nám v krátkosti vysvětlí, jak se skútr ovládá a můžeme vyrazit.
            Hned od našeho areálu vedou cesty označené červeným křížem, které jsou určeny právě pro skútry. V zimě je to tu hlavní dopravní
            prostředek.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} />
        <Image lightboxImage={img4} openLightbox={openLightbox} />
        <p>Vydáváme se do vesnice Arådalen, skútrem je to asi 12 km. Trasa vede přes pláně, lesy, zamrzlá jezera i pár opuštěných chatových osad.
            Jedeme převážně po rovince, ale sem tam narazíme na záludnou zatáčku nebo prudký hup, takže to chce i trochu řidičského skillu. Taky se
            nakláníme sem tam podle toho, kam potřebujeme jet. Je krásně, sluníčko svítí, mrzne, kocháme se pohledem na zasněžené hory a lesy kolem
            nás. Ještě nějakého toho soba potkat a byla by to učiněná švédská pohádka. Kromě několika skútrů ale nepotkáváme nikoho. Na rovinkách na
            to občas pěkně šlápneme, nejvíc jedeme asi 50 km/h. Střídáme se v řízení, sem tam zastavíme na fotku.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox} />
        <Image lightboxImage={img6} openLightbox={openLightbox} />
        <p>Když už jsme skoro v Arådalen, narazíme na úzkou zatáčku v kopci, chceme si trochu najet a ouha, sjedeme moc na stranu, kde je sníh příliš
            hluboký a převracíme se. Padáme do měkkého, takže je to docela sranda, ale když pak zjistíme, jak je skútr těžký a že jen tak zvednout
            nejde, smát se přestaneme. Naštěstí se nám to nakonec s pomocí lopaty, kterou vyhrabáváme sníh pod lyžinama, povede.</p>
        <Image lightboxImage={img7} openLightbox={openLightbox} />
        <p>V Arådalen nic moc není, pár starých baráčků a kostelík na kopci. Podle map.cz by tu měly být běžkařské trasy, ale všechno je děsně
            zafoukané sněhem, takže nic moc. Točíme video a pak to radši otáčíme a jedeme domů, je pěkná kosa a fučí ledový vichr. I tak je to ale
            obrovský zážitek, hlavně, když nás cestou zpět doprovází západ slunce (zapadá tu asi v půl 5).</p>
        <Image lightboxImage={img8} openLightbox={openLightbox} />
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <figcaption>Krátká zastávka v Arådalen</figcaption>
        </figure>
        <figure>
            <video controls>
                <source src={video2Src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <figcaption>Cesta domů na skútru</figcaption>
        </figure>
        <Image lightboxImage={img9} openLightbox={openLightbox} />
        <p>Od paní domácí si taky kupujeme sobí a losí maso - sobí steaky a losí mleté. To bude žranice!</p>
        <p>V noci opět vstáváme na polární záři, a opět máme smůlu. Tak zítra, určitě! <Smile/> </p>

    </div>)
}, [img1, img2, img3, img4, img5, img6, img7, img8, img9])
