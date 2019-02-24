import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/rakousko18/Rano.jpg";
import img2Src from "../../../images/rakousko18/Kone.jpg";
import img3Src from "../../../images/rakousko18/Cedule.jpg";
import Image from "../../articles/Image";
import Smile from '../../icons/Smile';
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/rakousko18/SelfieVideo.mp4";

const img1 = buildLightboxImage(img1Src, "Zas ráno");
const img2 = buildLightboxImage(img2Src, "Louka s koníkama");
const img3 = buildLightboxImage(img3Src, "Poslední polibek");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Místní myslivec taxikářem" date="Pondělí 30. 7."/>
        <p>Budíme se do krásného slunečného rána. Na počasí máme opravdu neskutečné štěstí, třetí noc v kuse lilo, ale
            přes den je zas hezky. Dáme si dole snídani, sbalíme se a s plnou polní, jen v kraťasech a tričkách
            vyrážíme.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Je to paráda, jde se nám moc hezky, postupně klesáme, kolem nás zurčí potůček a sem tam nějaké to jezírko,
            postupně přibývá vegetace a sluníčko peče víc a víc. Po vzoru Petra a Sáry a jejich selfie videí ze Skotska,
            kde Petr nehne brvou, otáčí rukou a Sára háže jeden úsměv a modelkovský výraz za druhým, taky podobné
            natáčíme.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Selfie video</figcaption>
        </figure>
        <p>Necháváme chatu daleko za sebou a vysoko nad sebou, místo toho se ocitáme na bažinaté louce s koníky, kde
            mlsáme borůvky.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Netrvá dlouho a scházíme pod hranici lesa, na lavičce ve stínu odpočíváme a za další zhruba hodinku se
            ocitáme na kraji národního parku, za kterým už je štěrková cesta vedoucí až do vesnice Putschall, cíle naší
            cesty.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Naposledy čepujeme čerstvou vodu a scházíme až k cestě. Kolem jsou i nějaké chaty a u jedné z nich si
            všimneme pána s velkým teréňákem, který vypadá, že nakládá věci. Během chvilky se rozhodneme, že si ho
            zkusíme stopnout. Máme neskutečné štěstí, pán nám opravdu zastaví, naloží nás i krosny a přestože tam nemá
            cestu, zaveze nás až k Obludě do Winklu. Moc si nerozumíme, ale pochopíme, že je to myslivec a na horách
            nechává stavět několik chat. Seslalo nám ho samotné nebe!</p>
        <p>U Obludy jsme tím pádem docela rychle a už kolem poledne vyrážíme. Stavujeme se ještě u náhodné řeky u
            silnice, kam se v 30° C vrháme smýt ze sebe pot a osvěžit se. Je to nesmírně příjemné a aspoň v autě
            nesmrdíme. <Smile/> Domů dorážíme ještě za světla. Sláva nazdar výletu, nezmokli jsme a jsme tu!</p>
    </div>)
}, [img1, img2, img3])
