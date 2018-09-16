import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import img1Src from "../../../images/nepal/durbar.jpg";

const img1 = buildLightboxImage(img1Src, "Durbar square");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Káthmandú" date="Pondělí 30. 4."/>
        <p>Cesta je dlouhá, ale návštěvy letištních salónků v Praze a v Istanbulu, kde se Míša vesele občerstvuje a
            turecký barman je rád, že tu konečně někdo pije alkohol, ji činí snesitelnější.</p>
        <p>Když přistaneme v Káthmandú, je vlastně už pondělí. Jako první nás překvapí vrstva smogu, přes kterou nejde
            skoro vidět. Vystojíme si na letišti frontu na vyřízení víz, vyplníme formuláře, předáme fotky, zaplatíme 40
            USD, dostaneme razítka a můžeme vyrazit. Hned si voláme taxíka do hotelu. Bookli jsme si Dom Himalaya hotel
            kousek od centra, kde je check-in už od 7 ráno. Teď je asi půl 7. V hotelu je pěkná recepce a milá recepční,
            na pokoj si ale musíme ještě počkat. Za příplatek si tedy mezitím dáme snídani v restauraci.</p>
        <p>Když už je pokoj konečně ready, nejdřív musíme pořádně vyvětrat, páč je tak vyvoněný, až smrdí. Potom padneme
            do postele a spíme až do jedné odpolední. Odpoledne máme v plánu vyrazit do města a zařídit si permity na
            trek. Na recepci nás straší, že Nepal Tourism Board, jediné místo v Nepálu, kde si lze zařídit permity, má
            zavřeno kvůli státnímu svátku. Je totiž Buddha’s birthday. Jakýsi manager of tourism v hotelu se nás snaží
            přesvědčit, abychom si od něj zaplatili dopravu i horského vůdce. Trek je prý nebezpečný a nesmíme se tam
            pohybovat sami. Pche, to tak! Děsíme se, že budeme muset v Káthmandú zůstat o den déle, než jsme zamýšleli.
            Už z prvních pár chvil tu strávených totiž tušíme, že to nebude zrovna naše nejoblíbenější město.</p>
        <p>Nakonec se rozhodneme zajít do information office osobně. Tady v Nepálu se člověk může spolehnout jedině sám
            na sebe. Cestou hledáme funkční bankomat, což je tu trochu oříšek. Vybírat musíme nadvakrát, protože tu mají
            trochu nesmyslně limit na výběr ve výši 35 000 NPR. Dvojí poplatek za výběr nás samozřejmě nemine. Na
            ulicích místní pálí odpadky, všude je prach, špína, smog a smrad. Kupujeme roušky na obličej, jsme holt
            rozmazlení turisté. Stavujeme se v Garden of Dreams na kafe a první nepálskou Masalu. Naštěstí info office
            je otevřená a celkem bez potíží si stihneme vyřídit povolení vstupu do Annapurna Conservation Area.
            Zaplatíme 40 USD, vyfasujeme kartičky s našimi fotkami a taky zjišťujeme informace ohledně odjezdu autobusů
            do podhůří Himalájí, vesničky Bhulbhule.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Cestou zpět do hotelu si ještě projdeme Durbar’s square s chrámy, bohužel kvůli zemětřesení před 3 lety dost
            rozpadlými. Taky narazíme na průvod na oslavu Buddhy, což je na začátku celkem zajímavé, ale když se kvůli
            tomu nemůžeme dostat zpět do hotelu, protože lidi jsou všude a nejde ani přejít přes ulici, už jen nadáváme.
            K večeři si dáme Dal Bhát a pár koktejlů v restauraci vedle hotelu. Před spaním si na recepci objednáváme
            snídaňové balíčky a taxíka, který nás ráno odveze na autobusové nádraží. Jsme trochu skeptičtí, jak to
            dopadne.</p>
    </div>)
}, [img1])