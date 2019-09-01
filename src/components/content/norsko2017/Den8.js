import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D8_Gjende.jpg";
import img2Src from "../../../images/norsko2017/D8_duha.jpg";
import img3Src from "../../../images/norsko2017/D8_lisejniky.jpg";
import img4Src from "../../../images/norsko2017/D8_hory.jpg";
import img5Src from "../../../images/norsko2017/D8_spolu.jpg";
import img6Src from "../../../images/norsko2017/D8_double_duha.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Jezero Gjende");
const img2 = buildLightboxImage(img2Src, "Duha poprvé");
const img3 = buildLightboxImage(img3Src, "Lišejníky, kam se podíváš");
const img4 = buildLightboxImage(img4Src, "Hory na obzoru");
const img5 = buildLightboxImage(img5Src, "Ahóój!");
const img6 = buildLightboxImage(img6Src, "Duha podruhé");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Honba za lepším počasím" date="Úterý 12. 9. 2017"/>
        <p>Budíka jsme měli už na půl 8, protože jsme chtěli zkusit vyrazit na trek mezi jezery. Jenomže cestou byla
            šílená mlha a nebyly žádné okolní hory vidět. I u jezera bylo pěkně hnusně. Takže změna plánu – nakonec jsme
            se rozhodli popojet 2 hodiny do NP Rondane, protože tam byla předpověď mnohem lepší. Na internetu jsme
            našli, že skrz celé Rondane vede taková vyhlídková cesta po silnici, odkud je hezky vidět na okolní hory.
            Cestou jsme jeli dokonce chvíli i po dálnici, kde byla dokonce nejvyšší povolená rychlost 90 km/h!</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Když jsme dojeli do Rondane, bylo taky docela hnusně, ale aspoň bylo něco vidět a chvilkama dokonce vysvitlo
            sluníčko. První zastávku jsme udělali u jezera se sezením a chatičkou s trávou na střeše. Měli jsme štěstí,
            zrovna se udělala díra mezi mrakama, kudy prosvítalo sluníčko, a dokonce se vytvořila krásná duha přes celé
            jezero, tak jsme si tu dali i sváču.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>O kus dál jsme nechali auto a vyrazili na trek, který Míša den předem naplánoval. Hned na začátku bylo
            strašně moc lišejníků, a protože jsme špatně zabočili, museli jsme jít přímo přes ně mimo cestu. Byly světle
            zelené až bílé, měkkoučké, hluboké, a pěkně kluzké. Je to potrava pro sobíky, tak jsme pořád koukali, jestli
            nějaké taky neuvidíme, protože lidi tu nebyli žádní, ale prdlajs.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Na začátku jsme sešli z kopce na takovou bahnitou pláň a došli jsme až k řece, podél které jsme potom
            pokračovali. Podle plánu jsme měli dojít do nějaké další horské vesničky, ale po docela dlouhé době jsme z
            mapy zjistili, že jsme teprve asi ve třetině cesty tam. Změnili jsme tedy plán a vystoupali na paralelní
            štěrkovou cestu, která nás dovedla až k jezeru, odkud byly parádní výhledy na okolní hory.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox}/>
        <p>Vyfotili jsme se poprvé na samospoušť, abychom měli aspoň nějakou fotku spolu. Nikde nikdo nebyl, což na
            celém výletu bylo super. Cestou zpět jsme se stavili na sváču na jednom pěkném místě u řeky, kde bylo i
            ohniště s ještě celkem horkými uhlíky, takže tu asi někdo kempoval. Cestou k autu jsme museli dost
            zrychlovat, protože začínalo lejt, ale stihli jsme si ještě i nakrást z lesa pár polínek dřeva na
            večer.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox}/>
        <p>Cestou zpět autem do chatičky jsme se stavili na pěkné vyhlídce, odkud byly opět krásné výhledy na dvoutisícovky v okolí, kam se ještě později podíváme a taky na takovém kopečku, odkud byla luxusně
            vidět ten den naše asi pátá duha. <Smile/> Do chatičky jsme se vrátili až po osmé večer, rozdělali oheň v krku a dali jsme si k večeři zbytek ze
            včerejška, čajík a pivo a po večeři ještě čokoládu. <Smile/></p>
        <Image lightboxImage={img6} openLightbox={openLightbox}/>
    </div>)
}, [img1, img2, img3, img4, img5, img6])
