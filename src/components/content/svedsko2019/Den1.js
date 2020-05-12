import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/Hygge.jpg";

import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "První večer u krbu");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Dlouhá cesta" date="Pondělí 11. 2." />
        <p>Vyrážíme hned v pondělí po svatbě. Poslední dny jsou dost hektické, přípravy na svatbu, chystání, svatba, úklid, převážení věcí, balení,
            vybalování, další balení a konečně odlet. Nejvíc se těšíme na to, že nebudeme muset konečně nic dělat, nic řešit, nikam vstávat, prostě
            NIC! Budeme dělat jenom to, co chceme.</p>
        <p>Let máme za sebou raz dva, dokonce i odbavení 4 párů běžek pečlivě obalených alumatkami v lyžařském fusaku proběhne bez problémů. Z Arlandy
            se odvezeme pár stanic busárnou ke car rental, kde pracují snad jen pánové tmavší pleti, vystojíme si frontu a protože má pán starost, aby
            se nám lyže vešly do objednaného auta, vyfasujeme bez příplatku větší a lepší. Krásně nám to začíná! <Smile /></p>
        <p>Jediná malinká komplikace je, že auto je manuál, na to jsme si už trochu odvykli, takže občas dáváme motoru docela zabrat. Čeká nás
            šestihodinová cesta na sever, naší finální destinací je Galå Fjällgård, usedlost čítající pár chatek uprostřed ničeho v provincii
            Jämtland. Nejbližší větší město poblíž je Östersund vzdálený asi hodinu a půl. Vyjíždíme skoro za tmy. Stmívá se tu o necelou
            třičtvrtě hodinu dříve než u nás touto dobou, sluníčko zapadá v 16:30. Jak se budeme posouvat na sever, západ slunka to tolik neovlivní,
            ale vycházet bude později, oproti Stockholmu o cca 40 min, po osmé ranní. Tak brzy ale vstávat nehodláme. <Smile /></p>
        <p>Zpočátku potkáváme i auta, ale to brzy pomine a většinu cesty jedeme úplně sami po zasněžených silnicích. Občas projedeme nějakou vesničkou
            osvětlenou vánočními světýlky s vánočními stromky, jinak je všude tma, ticho a klid. Jakoby se tu zastavil čas. Kvůli zvěři je tu dost
            často omezená rychlost a my to respektujeme jednak kvůli častým rychlostním kamerám, a taky zasněžené a zledovatělé cestě. Brzy ale
            zjistíme, že díky hřebům zabodaným v pneumatikám, jak je tu v zimě zvykem, náš Španěl (tak jsme vypůjčené autíčko Seat pojmenovali),
            zvládá cestu bez problémů. Je mráz a jasno, a tak na jednom obzvlášť osamoceném místě zastavujeme a sledujeme mléčnou dráhu, která je tady in the middle of nowhere krásně vidět.
            Potkáváme pár lišek a dokonce obrovského losa, který před námi přechází cestu. Tak přece jen tu nejsme sami. <Smile /></p>
        <p>Našemu cíli se přiblížíme kolem půlnoci, když už jsme oba pěkně unaveni. Od paní domácí máme popis, jak najít naši chatičku se jménem Freja. Svítí se v ní
            a klíče jsou v zámku. V noci toho z okolí moc nevidíme, ale to, co vidíme, je pecka! Spoustu sněhu, který se třpytí. A chatička unitř je
            dokonce ještě hezčí, než na obrázcích! Celá dřevěná, útulná, se starými běžkami jako dekorací na stěnách, sauna jen pro nás, krb a hygge
            koutek za krbem! Přitopíme si v krbu a cítíme se tu hned jako doma. Líp jsme si vybrat nemohli. Když unavení po dlouhé cestě konečně
            zapadneme do měkkých peřinek, máme tušení, že tahle dovolená bude stát za to.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
    </div>)
}, [img1])
