import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D7_mraky.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Mraky válící se v údolí");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Přesun do NP Jotunheimen" date="Pondělí 11. 9. 2017"/>
        <p>Ráno dost fučelo, ale nepršelo, a to bylo pozitivní. U stolu jsme se dali do vaření snídaně – vločkové kaše a
            těšili jsme se, jak pěkně kultivovaně opět posnídáme u stolu, jenže opět začalo pršet. Prostě zákon
            schválnosti. Narychlo jsme sbalili všechny věci, a nakonec jsme se nasnídali v autě.</p>
        <p>Čekal nás dlouhý přejezd do NP Jotunheimen a cestou několik zastávek u fjordů. Díky dešti jsme aspoň vyrazili
            docela rychle, což se nám obvykle nestávalo. Lilo snad celou cestu, tak jsme přemýšleli, že se ubytujeme zas
            někde vevnitř. Našli jsme docela pěkné chatičky na Bookingu, ale ještě, než jsme k nim dojeli, stavili jsme
            se v celkem velkém městě Fagernes. Byl tu veliký nákupák a dokonce letiště, to vše pro 1500 obyvatel. <Smile/> V
            nákupáku jsme se na chvíli schovali před lijákem, nakoupili, nabrali vodu a sehnali v lékárně probiotika,
            která Míšovi doporučila lékárnice a díky bohu to byla první věc, co zabrala. Taky stály 700 NOKů!</p>
        <p>Byli jsme docela otrávení, že je tak hnusně, protože i předpověď na další dny vypadala stejně. A my jsme
            přitom měli v plánu známý trek Bessegen se dvěma různě zbarvenými jezery. V tomhle počasí by to ale nemělo
            cenu. Cesta k Bessegenu vede lyžařským střediskem Beitostølen, kde to v zimě asi žije, teď tu ale vůbec
            nikdo nebyl. Zajeli jsme přímo do areálu k chatičkám, na recepci tu byl starý milý pán a půjčil nám klíče od
            dvou chatiček, abychom se rozmysleli, kterou budeme chtít. Malá stála 900 a velká 1100 NOKů, ale byla
            mnooohem větší než ta malá, s vytápěnou podlahou a krásným obývákem s krbem! Takže bylo jasno. Vzali jsme si
            ji rovnou na 2 noci, protože mělo být pořád hnusně. Byli jsme nadšení – to přesně potřebujeme! Tady vše
            usušíme, odpočineme si, zahřejeme se u krbu, no pohoda…</p>
        <p>Trochu jsme si dáchli, zabydleli se a pak se rozhodli vyrazit ještě na výlet. Na mapě jsme našli, že poblíž
            je nějaké jezero, kam by se mělo dát dojet autem. Bohužel jsme ale asi 2 km před jezerem narazili na závoru,
            kde jsme museli auto nechat a pokračovat pěšky. Protože lilo, nasadili jsme pláštěnky a šli. Míša si dokonce
            vzal prut, ale jezero bylo dost kamenité a ryby se neměly u pobřeží kam schovat, takže jsme byli neúspěšní.
            Místo toho jsme utrhli třpytku. ☹ Chvíli jsme ještě u jezera okounili, zaujalo nás totiž, že všude byly
            výstrahy se zákazem koupání a varováním před utopením. Všimli jsme si, že na jednom místě v jezeře, které
            bylo celé obehnáno bójkami, se tvořil nějaký vodní vír. Jinak pořád lilo a ani nebylo vidět na druhou stranu
            jezera, takže jsme za chvíli vyrazili zas k autu.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Zpět v našem lyžařském středisku, kde nebyla ani noha, jsme zajeli ještě do velkého Coopu, kde jsme si
            nakoupili věci na večeři. Měli jsme totiž v naší supervybavené chatičce i troubu, tak jsme toho chtěli
            využít a upekli si vepřovou krkovici na zelenině s bramborama. K tomu jsme si zatopili v krbu a asi poprvé v
            Norsku nám bylo večer vedro! Plánovali jsme program na další dny, povídali si a užívali si tepla a pohodlí.
            Celou noc lilo, takže jsme byli rádi, že nejsme nikde ve stanu.</p>
    </div>)
}, [img1])
