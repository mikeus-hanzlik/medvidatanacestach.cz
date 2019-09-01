import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D14_Boyabreen.jpg";
import img2Src from "../../../images/norsko2017/D14_Bryggen.jpg";
import img3Src from "../../../images/norsko2017/D14_vyhlidka.jpg";

import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Ledovcový splaz Bøyabreen");
const img2 = buildLightboxImage(img2Src, "Bryggen");
const img3 = buildLightboxImage(img3Src, "Setmění nad Bergenem");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Návrat do civilizace" date="Pondělí 18. 9. 2017"/>
        <p>Přes noc se nám hezky usušil stan, který jsme si večer rozložili do místnosti se sušákama a protože ráno opět
            pěkně lilo, byli jsme rádi, že ho nemusíme balit mokrý. V kuchyňce jsme si chtěli uvařit snídani, ale motali
            se tam nějací dva Asiati, kteří z nás byli trochu u vytržení a fotili si nás. Měli jsme trochu napilno,
            protože nás čekal přesun až do Bergenu, kde jsme měli booklé ubytování na poslední noci. I tak jsme se ale
            ještě zajeli podívat na další ledovcový splaz, Bøyabreen, který odsud byl už jen kousek. Než nám ty ledovce
            zmizí úplně…</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>U splazu nikdo nebyl a protože pršelo, vylezli jsme jen na chvilku na okouknutí a vyrazili dál směrem na
            Bergen. Cestou se kupodivu vyčasilo a vypadalo to, že ještě bude i hezky. Stíhali jsme dobře, kolem třetí
            jsme měli dojet do Bergenu a kolem páté odevzdávat auto. Jenomže ejhle, před vjezdem do samotného Bergenu
            nás zastavili policajti s tím, že dál se nesmí, protože je celé město uzavřeno kvůli světovému poháru v
            cyklistice. Nic proti cyklistům, naopak, jen to byla trochu komplikace. Rychle jsme vymýšleli náhradní plán,
            a nakonec jsme zaparkovali v podzemních garážích u nějakého nákupního centra a do ubytka jsme museli s plnou polní pěšky. Naložili jsme se věcma a vyrazili do ubytka, což bylo dost do kopce. Míša byl vzteklej,
            protože musel tahat velkej kufr s nefunkčníma kolečkama a mě zas dost bolelo v krku. Navíc jsme se museli
            vyhýbat všudepřítomným fanouškům a než jsme dorazili na ubytko, byli jsme už pěkně splavení. Na ubytku nás
            přivítala Ruska, se kterou jsme si předem psali, ale byla dost divná, neuměla anglicky a nebyla schopná
            odpovědět skoro na žádnej dotaz. Cestou do Bergenu jsme si s ní psali o parkování a byli jsme naštvaní, že
            nás předem neupozornila na to, že autem do města nedojedeme.</p>
        <p>Náš pokojík byl dost pidi, jen s postelí, skříní a malým bobíkem na sezení. Míša se vysprchoval, převlékli
            jsme se, vzali si batůžek s věcma a pospíchali zpátky pro auto. Cestou do půjčovny jsme se na benzínce
            stavili dotankovat a vyluxovat auto. U půjčovny to potom bylo docela napínavý, protože tam už nikdo nebyl.
            Nakonec jsme si ale všimli schránky na klíče od auta, kde bylo psáno, že je tam máme vhodit při vrácení.</p>
        <p>Z půjčovny jsme šli směrem do centra a bylo to fajn, protože jsme procházeli čtvrtěmi, kam turistická noha
            nedošlápla, a přitom to tam bylo stejně krásné. V obchodě jsme si koupili mlsoty – já samozřejmě mandličky v
            čokoládě, a k tomu nějaké smoothie. Došli jsme až k rybímu trhu, který mi přišel o dost menší než před
            několika lety, kdy jsem tu byla naposledy. Bylo tu všechno hodně drahé, takže jsme si ani nic nekoupili.
            Kousek odtud, na nejturističtějším místě v Bergenu – v Bryggenu – nikdo nebyl. Prošli jsme si úzké uličky a
            já jsem se rozplývala ze všech malých barevných dřevěných křivých baráčků. Bylo i teplo, skoro rekordně jsme na
            sobě měli jen mikiny.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Na večeři jsme se rozhodli plácnout se přes kapsu a přes Foursquare jsme našli dobře hodnocené bistro /
            kavárnu celkem blízko centru, tak jsme se tam vypravili. Měli tu polévky a sendviče, tak jsme si hned dali a
            moc jsme si pochutnali. Trochu jsme zevlili a za jednu polévku, sendvič a dva čajíky jsme tam nechali asi
            800 Kč. Po večeři jsme se vypravili na vyhlídku v lese nad městem, kam jsme se museli docela škrabat, ale
            stálo to za to, protože jsme akorát stihli západ slunce, nikdo tu nebyl a bylo tu krásně vidět na Bergen.
            Dalo by se tu i dobře stanovat, ale to jsme bohužel předem nemohli vědět.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Pozorovali jsme setmění, až jsme sešli zas zpět do města a já jsem si hrozně užívala každého baráčku kolem.
            Na to jsem se těšila nejvíc, až se sem vrátím a zas všechny ty baráčky omrknu. Takhle pod lesem to byly
            docela veliké vilky, dřevěné, každá jinak barevná, se zahradami a jak byla tma, dalo se jim tajně koukat do
            oken, což mám úplně nejradši, když vidím, co mají vevnitř a jak je to tam útulný a představuju si, že bych
            tam taky bydlela…</p>
        <p>Na ubytku bylo celkem narváno, kromě našeho pokojíku tam byly ještě další dva a byli tu Španělé a nějací
            Němci a papírové zdi, takže nás to večer docela rušilo a Míša byl pěkně otrávenej, a to i na mě, i když já
            za to nemohla. V noci byl už naštěstí celkem klid až na to, že jsem nemohla dýchat kvůli rýmě a pořád jsem
            se budila.</p>
    </div>)
}, [img1, img2, img3])
