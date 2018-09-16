import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/zasnezenaPriroda.jpg";
import img2Src from "../../../images/nepal/vyhlidkaNadManangem.jpg";
import img3Src from "../../../images/nepal/predThorongPhedi.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Zasněžená příroda");
const img2 = buildLightboxImage(img2Src, "Vyhlídka nad Manangem");
const img3 = buildLightboxImage(img3Src, "Cestou do Thorong Phedi");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Srí Kharka – Thorong Phedi" date="Čtvrtek 10. 5."/>
            <p>Ráno se budíme už kolem 6:00. Přes noc napadlo aspoň 20 čísel sněhu a stále sněží. Je to krása, ale
                zároveň to znamená, že budeme muset výstup na Tilicho Lake oželit. Je tedy jasné, že se vrátíme na
                Annapurna circuit a budeme pokračovat na Thorong La Pass. I tak se ale dohadujeme, jakou cestu zvolit.
                Zatímco Šárinka chce jít zkratkou rovnou na Yak Kharka, Míša se bojí, abychom se ve sněhu a mlze
                neztratili a raději by se vrátil stejnou cestou do Manangu a napojil se až tam. Když ale později
                dorazíme k rozcestí, je cesta na Yak Kharka naštěstí přošlápnutá. Je mlha a spoustu sněhu, ale později
                začíná vykukovat sluníčko.</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Užíváme si zasněžené výhledy a šlapání ve sněhu. Je to pecka! Neuvěřitelné, že jsme ještě pár dní zpátky
                zažívali téměř tropické počasí a teď se brodíme závějemi. Postupně ale sníh k Šárky lítosti taje.
                Procházíme kolem horní části vesničky Khangsar, která je tu úplně opuštěná. Potkáváme krávy (nebo
                yaky?), až dojdeme ke skále tyčící se nad údolím, ve kterém leží Manang. Je to skoro magické místo,
                jedno z nejhezčích na celém treku. Máme pod sebou obrovské údolí a po obou stranách nad ním pozorujeme
                obrovské hory. Je zřetelně vidět, kde končí hranice lesa a kde začíná sníh.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Dále začneme klesat zpět dolů k řece, kterou musíme přejít, abychom se znovu napojili na Annapurna
                circuit. Sníh pomalu mizí a zpět na treku najednou potkáváme davy lidí. Slyšíme i partičku Čechů, ke
                kterým se rozhodně nehlásíme. Abychom všem utekli, jdeme dost rychle a brzy jsme zas sami. Místo spaní v
                Yak Kharka se rozhodneme pokračovat dál. Šárince je už naštěstí celkem dobře. Necháváme za sebou i další
                vesničku, Letdar, a jsme už ve výšce 4200 mnm. Příroda se se stoupáním proměňuje, už tu nejsou žádné
                stromy ani keře, jen holé kopce a skály. Je to zas úplně jiný pohled, pomalu jako bychom byli někde na
                Islandu, nebo na Marsu. ☺ Kolem nic než špičaté holé skály, částečně pokryté sněhem, a my.</p>
            <Image lightboxImage={img3} openLightbox={openLightbox}/>
            <p>Procházíme bránou a jsme v Thorong Phedi, jednom ze dvou výchozích míst pro přechod průsmyku Thorong La
                Pass, přes 4400 mnm. To už je něco! Jsme utahaní, ale nadšení. Je tu jen jeden guest house a spoustu
                lidí. Vyfasujeme místečko v malém plesnivém pokoji, kde bude v noci asi dost zima, ale je nám to jedno,
                celý večer totiž trávíme ve společenské místnosti, kde je od kamen krásně teplo. Je tu hodně lidí a
                šrumec a pracuje tu Evropanka, od které se snažíme zjistit informace o přechodu průsmyku. Už jsme si
                zvykli, že od Nepálčanů se člověk nic moc užitečného nedozví. Slečna nám říká, že o žádném uzavření
                průsmyku neví, tak je to nejspíš nějaká fáma, jak jsme si mysleli. Jediné co, tak do Muktinathu na druhé
                straně hor má další den přijet na návštěvu Indian Prime Minister, takže se nejspíš nebude moct do
                některého z kláštěrů nebo chrámů.</p>
            <p>Večer hrajeme karty, popíjíme čajík, dáváme si Dal Bhat a filtrujeme vodu na další, vrcholový den.
                Několika lidem je tu hodně špatně, pro jednoho kluka dokonce musí přiletět vrtulník. Jsme rádi, že se
                nás výšková nemoc netýká. Trochu nás znepokojují ostatní výpravy, nenápadně je totiž posloucháme a
                všichni plánují vyrážet na Thorong La Pass hrozně brzy ráno, vlastně ještě v noci. Nechápeme, je to sice
                1000 výškových metrů, ale podle mapky bychom tam měli být z Thorong Phedi za 3 hoďky. Nenecháme se
                znervóznit, objednáváme snídani na 6:00 a budík nastavujeme na 5:30. V noci mrzne a je krásně jasno,
                nebe se třpytí stejně jako sníh kolem. Je to nádhera.</p>
        </div>)
}, [img1, img2, img3])