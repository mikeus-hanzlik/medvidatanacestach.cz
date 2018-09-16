import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/batuzky.jpg";
import trasaSrt from "../../../images/nepal/trasaNepal.png";
import Image from "../../articles/Image";

const img1 = buildLightboxImage(img1Src, "Sbaleno na cestu");
const trasa = buildLightboxImage(trasaSrt, "Annapurna Circuit trek");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Nepál 2018</h1>
        <p>Do Nepálu jsme se vydali koncem dubna 2018. Přestože je to jedna z nejchudších zemí na světě, má tu čest mít
            na svém území část nejvyššího pohoří světa a taky 8 z celkem 14 osmitisícovek téhle planety, včetně Mount
            Everestu. Země je to celkem malá, zhruba dvakrát tak velká jako ČR, s třikrát tolik obyvateli. Sousedí s
            Čínou a Indií, nejrozšířenějším náboženstvím je hinduismus, hned za ním buddhismus. Bohužel většina lidí
            stále nemá přístup k pitné vodě a více než třetina nemá ani toaletu. Odpadky jsou všude, bohužel i v horách.
            Místní jsou zvyklí vyhazovat je, kam je zrovna napadne, v lepším (nebo horším?) případě je pálit, kde se dá.
            Klidně na ulici hlavního města. Stejně ale všichni vypadají šťastně a spokojeně, na potkání zdraví namasté a
            usmívají se.</p>
        <p>Náš dlouho očekávaný výlet do nejvyšších hor světa začíná balením den před odletem. Podaří se nám nacpat do
            menších nových Osprey batůžků s objemem 40 a 44 l. Využijeme snad úplně všechen prostor a máme pocit, že víc
            se do nich už vejít nemůže. Pro představu, zabalili jsme si péřové spacáky, merino oblečení, kraťasy,
            nepromokavé kalhoty a bundu, péřovku, čepici, rukavice, sluneční brýle, základní hygienické potřeby,
            dalekohled, Therm-a-Rest sedátka pod zadek, power banku, nabíječku, čtečku, knížku Divočina, filtr na vodu,
            čelovky, trekové hůlky, pantofle, čtvery fusekle a spodní prádlo, malé ručníčky a z jídla potom proteinové a
            energetické tyčinky, spoustu sušeného ovoce a masa, oříšky, čokolády a na první dny arašídové míslo, sýr a
            klobásy. Spolu s naplněnými vaky na vodu to vše vážilo kolem 12 kg.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>V Himalájích nás čeká dvoutýdenní putování kolem masivu Annapuren, celkem 225 km, 21 000 m převýšení, několik
            osmitisícovek podél cesty, vedro, dusno, ale i déšť, bahno, sníh a závěje.</p>
        <p>Vybrali jsme si tenhle nejznámější a podle některých zdrojů taky nejkrásnější nepálský trek, který obchází
            masiv Annapuren a zavede nás až do průsmyku Thorong La Pass ve výšce 5416 mnm. Vede spoustou místních
            vesniček, kde místní z turismu žijí celý rok, hikery ubytovávají i jim vaří. Bohužel na hodně místech je už
            dost znát dotek civilizace. Hodně se tu staví zpevněné cesty, což na jednu stranu činí trek dostupnějším a
            pohodlnějším, na druhou stranu kvůli tomu ztrácí na autentičnosti.</p>
        <p>Nejlepší doba, kdy na trek vyrazit, je březen / duben a říjen / listopad. Jindy jsou buď monzuny, nebo velká
            zima. My jsme jeli v květnu, díky čemuž jsme minuli největší davy turistů a ve většině míst jsme byli sami.
            Jindy to tak ale být nemusí.</p>
        <Image lightboxImage={trasa} openLightbox={openLightbox}>
            <span>(<a href="https://mapy.cz/s/2F1NE" rel="noopener noreferrer" target="_blank">mapa zde</a>)</span>
        </Image>
    </div>)
}, [img1, trasa])
