import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko/JezeroVLedvicah.jpg";
import img2Src from "../../../images/slovinsko/VyhledNaTriglav.jpg";
import img3Src from "../../../images/slovinsko/CestaNaTriglav.jpg";
import img4Src from "../../../images/slovinsko/Prstynek.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Jezero V Ledvicah" );
const img2 = buildLightboxImage(img2Src, "Výhled na Triglav" );
const img3 = buildLightboxImage(img3Src, "Kamzík pod Triglavem" );
const img4 = buildLightboxImage(img4Src, "Prstýnek na Triglavu" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Koča při Triglavskih jezerih – Triglav – Koča na Doliču" date="Úterý 3. 7."/>
        <p>Ráno musíme vyklidit pokoje do 8:00, což znamená celkem brzké vstávání, snídaně, obligátní kloktání a po osmé už vyrážíme směrem dál údolím Triglavských jezer. Je pod mrakem, ale chvilkama i malinko prosvítá sluníčko. Opět se neustále předbíháme s Američany, nakonec jim ale utečeme.</p>
        <p>Necháváme chatu a první jezírka za námi, načež vystoupáme až nad jezero V Ledvicah, které nám pomalu vyrazí dech. Rozprostírá se pod námi, je krásné, velké, průzračné a zrcadlí se v něm obloha. I když není úplné vedro, neodoláme, slezeme srázem dolů ke břehu a skočíme se vykoupat. Sprchu tu na chatách asi jen tak nepotkáme a nějaká hygiena se hodí. Brzy nás následují i ostatní, kteří nás ze shora pozorují. Koupají se i starší Kanaďanky a naši Američani.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Po parádním osvěžení stoupáme k dalším jezírkům, která už nejsou zdaleka tak hezká. Obcházíme koču na Prehodavcih, necháváme vegetaci za sebou a čeká nás pořádně prudké stoupání kolem vrcholu Poprovec až do 2350 mnm. Vcházíme opět do mraků, musíme se přiobléct, ale brzy k našemu nadšení z mraků vystupujeme a užíváme si konečně pořádné azuro. Jsme nadšení a přidáváme do kroku, abychom mrakům utekli a spatřili Triglav. To se nám po chvíli opravdu poštěstí a fešák se nám ukáže v celé své kráse. Svačíme u rozcestníku za sněhovým polem a potkáváme skupinku Čechů, od kterých zjišťujeme informace potřebné k výstupu. Poprvé nás napadá, že bychom nahoru mohli „vyběhnout“ už dnes.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Než dorazíme do Koči na Doliču, čeká nás ještě pořádné klesání, a to bohužel přes sněhové pole. Je to celkem o držku a nakonec to řešíme tak, že po sněhu sjedeme po zadku. Šárince se přitom ale nešikovně vyhrnou kraťasy, že si pěkně odře zadek, při sjezdu ztratí hůlku a dole se málem nezastaví. Naštěstí to ale dobře dopadne a v chatě jsme kolem jedné odpolední.</p>
        <p> Ochotné slečny nám radí jít na Triglav opravdu už dnes, protože další den se má kazit počasí. Prý se to dá zvládnout i bez vybavení na ferraty. Dáváme si výborný stew, třídíme věci z batohů, ať toho nahoru netáhneme zbytečně moc, půjčujeme helmu a vyrážíme. Podle ukazatelů je to nahoru asi 2 hodiny, ale neděláme si iluze, že bychom byli tak rychlí. Se slovinskými odhady času už máme jisté zkušenosti.</p>
        <p>Zezačátku nás čeká cik cak stoupání, potom pohodová široká kamenná cesta pomalu pro důchodce, až asi ho hodině a něco přicházíme k úpatí Triglavu. Žasneme, jak je obrovský. Tam že máme za necelou hodinku vylézt?</p>
        <p>Pospícháme dál, protože mraků přibývá a jsou stále výš a výš. A my chceme z vrcholu něco vidět! Předcházíme Němce, se kterým se později dáme do řeči a nakonec s ním jdeme i dolů a strávíme půlku večera v chatě. Hned na začátku stoupání na Triglav potkáváme první ferrata úsek. Po kolmé stěně musíme překonat několik metrů přes železné stupínky a lano. Není to vůbec příjemné, ale zvládáme to. Ve štěrbině mezi skalami, kudy musíme prolézt, potkáváme kamzíka, který nás nepřátelsky pozoruje a odmítá se hnout z místa. Asi jsme mu pronikli do teritoria.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
        <p>Míšovi dochází energie, tak se posilňujeme hroznovým cukrem. Čeká nás ještě několik náročnějších železných pasáží, ale nakonec bez větších obtíží dosahujeme vrcholu. A k našemu překvapení jsme nahoře úplně sami! Je to paráda. Všechny mraky jsou stále pod námi, ale není jich tolik, aby nám znemožnily výhledy na okolní hory. Je krásně a vedro a my jsme šťastní, že jsme to zvládli!</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3} />
        <p>Při sestupu jdeme spolu s Němcem, který má strach jít sám. Povídáme si a cesta nám utíká. Do chaty se vracíme akorát včas, začíná pořádně hřmít a trochu kape. Všechny private roomy jsou bohužel plné a i když jsme si pokoj rezervovali předem, s chatou byla složitá domluva a rezervaci nám neudělala. Takže nakonec končíme v sharovaném pokoji pro 6 osob. K večeři si dáváme opět stew a k tomu palačinky. Mňam! Máme radost, když v chatě znovu potkáváme Američany a večer se konečně dozvídáme, jak se jmenují – Kate a Mike.</p>
        <p>Bohužel u chaty jsou jen venkovní turecké WC a dokonce téměř neteče voda, jdeme tedy spát dost ulepení. Není ale nic, co by nám zkazilo radost!</p>
    </div>)
}, [img1, img2, img3, img4])
