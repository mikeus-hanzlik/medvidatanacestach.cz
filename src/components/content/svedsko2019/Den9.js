import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/Plaz.jpg";
import img2src from "../../../images/svedsko2019/Knihovna.jpg";
import img3src from "../../../images/svedsko2019/Stockholm.jpg";
import img4src from "../../../images/svedsko2019/Ulicka.jpg";


import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1src, "Pláž poblíž kolejí Lappis");
const img2 = buildLightboxImage(img2src, "Stockholmská knihovna");
const img3 = buildLightboxImage(img3src, "Výhled na Stockholm z Södermalmu");
const img4 = buildLightboxImage(img4src, "Södermalmská ulička");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Stockholm křížem krážem" date="Úterý 19. 2." />
        <p>Čeká nás dlouhý den. Po snídani a kafíčku se hned vydáváme do areálu vysokoškolských kolejí Lappis, kde jsem kdysi bydlela. Jsem celá
            natěšená, až zas uvidím svůj starý baráček a okno od pokojíku, kde jsem strávila půl roku života. Vystoupíme na Universitetet a jdeme na
            Lappis pěšky kolem fitka, kde jsem se něco nacvičila, přes pole, až ke známým baráčkům z červených cihel.</p>
        <p>Je to pěkně dávno, a přitom si to všechno vybavuju, jako by to bylo včera. Když jsem sem v lednu přijela s dvěma kufry a velkým batohem na
            zádech, sotva jsem tu bagáž po zasněžených chodníčcích vytáhla, sníh se hromadil pod kolečky a moc to nejelo. Když jsem se další den ráno
            vzbudila před devátou a venku bylo ještě trochu šero a spoustu sněhu… Jak jsem si tu v zimě dávala nekonečně dlouhé horké sprchy, abych se
            po návratu z mrazivého venku zahřála. Co jsem se tu naběhala, nachodila, jak jsem každý den koukala z okna ven, kochala se a byla jsem
            šťastná, že tu jsem. Jak jsem tu díky pravidelným společným několikachodovým večeřím s ostatními Erasmáky přibrala asi 10 kilo a přitom
            jsem cvičila a běhala skoro každý den. Jak jsem si v červnu trhala do pokojíku čerstvý šeřík. Jak jsem před odjezdem stála ve vystěhovaném
            prázdném pokoji a brečela…</p>
        <p>Nostalgicky vzpomínám a ukazuju Míšovi celý areál i s obchodem Icca, barbecue spoty a taky cestu k moři, kde jsme dělali pikniky a chodili
            na procházky. Jsou tu ještě zbytky sněhu, ale kam se to hrabe na ty časy, co jsme tu mohli běžkovat a běhat po zamrzlém zálivu.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Poté nasedáme na bus a jedeme až ke knihovně a SSE, Stockholm School of Economics. Mrkneme do knihovny, kde je nejhezčí vestibul s kulatými
            stěnami, odkud je vidět několik pater s poličkami plnými barevných knížek.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Potom projdeme kolem Mekáče, kde jsem si za celé studium snad ani nic nekoupila, parčíku před školou a už jsme tu, před Handelshögskolan,
            tou úctyhodnou budovou s obrovskými dveřmi. Přepadne mě další vlna vzpomínek. Jak jsem tu byla poprvé, všude mraky sněhu, sotva jsem dokázala
            ty dveře otevřít a pak jsem zmateně hledala kancelář pro Erasmus studenty. Jak jsme tu měli prezentace domácích škol a poprvé se setkali s
            ostatními Erasmáky. Jak se tu konala ve sklepě black and white party a já si vzala koženou sukni celou na zip. Jak jsme tu strávili
            spoustu času nad týmovými pracemi. Jak jsem sem pyšně brala všechny návštěvy a byla ráda, že jsem si vybrala právě tuhle školu.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3} />
        <p>Dále se přesouváme na Södermalm, jižní ostrov, odkud jsou krásné vyhlídky na Gamla Stan. Jdeme tu i na sváču do jedné kavárny, kterou
            vybíráme přes Foursquare. Poté se autobusem přibližujeme k místu, kde kdysi bydlela Míšova sestra Jicinka. Je pěkná kosa, ale aspoň nikde
            nejsou lidi. Zpátky jedeme přívozem až na Nybroplan, kde začíná krásná promenáda kolem vody až k ostrovu Djurgården, který projedeme
            jedinou tramvají ve Stockholmu, číslo 7. Jedeme kolem skansenu i zábavního parku Gröna Lund zpět do města. Projdeme spoustu dalších míst a
            večer celí uťapaní padáme (nebo spíš přikrčení lezeme) do postele.</p>
    </div>)
}, [img1, img2, img3, img4])
