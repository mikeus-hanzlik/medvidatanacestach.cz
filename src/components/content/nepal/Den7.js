import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/cestaDoGhyaru.jpg";
import img2Src from "../../../images/nepal/ghyaru.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Modlitební mlýnky");
const img2 = buildLightboxImage(img2Src, "Restaurace v Ghyaru");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Upper Pisang – Ngawal" date="Neděle 6. 5."/>
            <p>Ráno zaspíme. K snídani si dáváme pro změnu rice pudding, což je vlastně taková rýžová kaše. Před
                odchodem se ještě chvíli kocháme nádhernými výhledy z terásky na Annapurnu II a IV, filtrujeme vodu a
                vyrážíme v náš standardní čas – 10:00. Máme tak aspoň jistotu, že nebudeme potkávat moc lidí, touhle
                dobou jsou totiž už všichni hikeři dávno na cestě. ☺</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Čeká nás nádherná část treku. Celý den máme výhledy na údolí s řekou pod námi a masiv Annapurny na druhé
                straně údolí. Počasí nám přeje, je to den jako malovaný. Zezačátku jdeme krásnou cestou po vrstevnici,
                potom ale dorazíme pod kopec a čeká nás asi 600 m převýšení na cca dvoukilometrovém úseku. Funíme a jsme
                docela hotoví, takže jsme rádi, když nahoře na kopci najdeme krásnou malou vesničku Ghyaru. Odpočíváme,
                točíme video a rovnou tu i dáváme na luxusní oběd – česnečku, omeletu a domácí jablečný koláč.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Dál nás čeká zas krásná cesta po vrstevnici a také poprvé vidíme i Annapurnu III. Ubytujeme se už v
                Ngawalu, protože se nám tu moc líbí a potřebujeme čas na léčení. Vybereme si Hotel Peaceful, kde nám
                dají krásný prosluněný rohový pokoj s okny na 3 strany. Nejdřív si chceme chvilku odpočinout, ale netrvá
                to dlouho a usínáme. Večer si dáme po delší době teplou sprchu a taky naprosto luxusní večeři – domácí
                mashed potatoes a vajíčka natvrdo. Tady v horách i nejobyčejnější jídlo chutná skvěle. Zase nejde
                elektřina, ale mají tu záložní zdroj, tak sedíme v dining hallu pod žárovkou, píšeme deník a studujeme
                mapy. Kromě nás jsou v celém guest housu už jen 2 Rusové. Anglicky moc neumí a jdou brzy spát. My si
                ještě povídáme s místními, pán je policista a Čechy má rád, ukáže nám pohled a ořechovici od hostů z
                Čech a my si s ním na oplátku připijeme naší „dezinfekční“ hruškovicí od Miriam (děkujeme!).</p>
            <p>Před spaním využijeme blackoutu a dalekohledem sledujeme hvězdy. Je to nádhera! Velký vůz, což je asi tak
                jedno z 3 souhvězdí, které poznáme, je tady úplně nakřivo. ☺</p>
        </div>)
}, [img1, img2])