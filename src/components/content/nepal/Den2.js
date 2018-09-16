import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import img1Src from "../../../images/nepal/bhulbhule.jpg";

const img1 = buildLightboxImage(img1Src, "První večer v Bhulbhule");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Káthmandú - Bhulbhule" date="Úterý 1. 5."/>
        <p>Vstáváme v 6:00, na recepci na nás opravdu čekají snídaňové balíčky a recepční nám zavolá taxíka. Přijede po
            půl 7, naloží nám věci a potom někam odběhne. Chvíli čekáme, a nic. Čekáme dál, pořád nic. Začínáme být
            nervózní, bus jede v 7! Míša se jde po řidiči podívat a najde ho, jak se vykecává v hotelu. Popožene ho a
            řidič se potom snaží odčinit své chyby, na autobusáku nás doprovodí až ke kase, vyřídí nám lístky na bus a
            potom nás i odvede k autobusu. Ten vypadá trochu divoce a dost staře. Batůžky musíme dát na střechu, tak je
            aspoň zabalíme do pláštěnek, aby se moc neušpinily. No a potom začíná cesta hrůzy. Zezačátku je to celkem
            sranda, jede se děsně pomalu, dva náběrčí, co s námi kromě řidiče jedou, se za jízdy vyklání ze dveří a
            pokřikují na všechny kolem, každou chvíli někam odběhnou dealovat s potenciálními cestujícími a řidič čeká.
            Mezitím do autobusu chodí děti, co prodávají slané křupky nebo sušené ovoce obalované v čili.</p>
        <p>Počáteční legrace nás ale brzy přestává bavit. Je příšerné vedro, naše průměrná rychlost asi 25 km/hod, oknem
            a dveřmi se dovnitř neustále práší, každou chvíli někde zastavujeme a na jedné zastávce dokonce autobus i se
            všemi zavazadly odjede neznámo kam a asi hodinu se nevrací. Po neskutečných 11 hodinách cesty a necelých 190
            km jízdy se konečně dostáváme téměř k cíli. Vesnička Khudi už je jen pár kilometrů od Bhulbhule, kde máme v
            plánu začít naší trasu kolem Annapuren. Nicméně když se tu řidič s náběrčími chystají sundat ze střechy
            gauč, který s námi absolvoval celou cestu, dochází nám trpělivost. Požádáme o sundání batohů a spolu s dvěma
            Britskými bratry, kteří nás následují, se vypravujeme do Bhulbhule pěšky.</p>
        <p>Ubytujeme se v mrňavém pokojíku, který vypadá spíš jako kobka, zavírá se pomocí posuvných dřevěných vrat jako
            od chlíva a je vytapetovaný starými nepálskými novinami. O patro níž je jídelna. Sedáme si na verandu s
            výhledem na řeku a i večer je krásně teplo. Dáváme si kari a čaj, jako ještě hodně dalších večerů.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>K našemu údivu je tu k dispozici i teplá sprcha, tak toho musíme využít a jdeme ze sebe smýt nachytanou špínu
            a pot z té příšerné cesty. Před spaním nás čeká první blackout a taky nekonečný štěkot psů, který nás ještě
            pěknou chvíli ruší.</p>
    </div>)
}, [img1])