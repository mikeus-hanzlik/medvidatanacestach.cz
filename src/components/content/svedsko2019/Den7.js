import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/Lugnet.jpg";
import img2src from "../../../images/svedsko2019/Skokanky.jpg";
import img3src from "../../../images/svedsko2019/FalunBaracky.jpg";
import img4src from "../../../images/svedsko2019/Falun.jpg";
import img5src from "../../../images/svedsko2019/Kavarna.jpg";


import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Lyžařský areál Lugnet");
const img2 = buildLightboxImage(img2src, "Cílová rovinka a skokánky v pozadí");
const img3 = buildLightboxImage(img3src, "Falun");
const img4 = buildLightboxImage(img4src, "Barevné baráčky ve Falunu");
const img5 = buildLightboxImage(img5src, "Kavárna ve Falunu");



export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Na tratích světového poháru" date="Neděle 17. 2." />
        <p>Vstáváme děsně brzy, protože dnes má být na stadionu omezený vstup kvůli závodům. Dáme si snídani, oblékneme se na běžky a už před devátou
            stojíme na ski stadionu v Lugnetu pod majestátními skokanskými můstky. Stadion působí ohromně - stopy jsou tu luxusně najeté a děsně
            široké! Úplně nás svrbí nohy. Tratí je tu několik, nejdelší je 15 km dlouhá, nejkratší asi 2 km. Konají se tu závody, ale vlastně nás to v
            ježdění nijak neomezuje. Cesty jsou naprosto parádní, někde sice trochu zledovatělé, ale krásně značené, široké a skoro nikdo tu není.
            Chvíli jezdíme společně a chvíli každý sám. Je znát, že se tu jezdí svěťáky - kopce jsou dost prudké a stejně tak i zatáčky. Zato to ale z
            kopce pěkně sviští. <Smile /> Celkem objedu asi 17 km. Sejdeme se zpět na stadionu a vracíme se domů na oběd.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <Image lightboxImage={img2} openLightbox={openLightbox} />
        <p>Po obědě vyrážíme do centra Falunu - zaparkujeme u nákupního centra, kde později také nakupujeme. Centrum je celkem malé a vylidněné, i
            když je neděle. Svítí sluníčko a jsou tu staré hezké barevné dřevěné domky kolem potoka - to je něco pro mě. Nakonec zapadneme do kavárny
            na mňaminky a řádně posilněni dortíky vyrážíme zpět na stadion. Musíme to pořádně využít! Tentokrát si dáme jen asi 11 km. Končíme se
            západem slunce.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} />
        <Image lightboxImage={img4} openLightbox={openLightbox} />
        <Image lightboxImage={img5} openLightbox={openLightbox} />
    </div>)
}, [img1, img2, img3, img4, img5])
