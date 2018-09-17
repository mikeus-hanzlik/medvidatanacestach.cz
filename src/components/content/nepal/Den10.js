import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import video1Src from "../../../images/nepal/udoliZaManangem.mp4";
import ArticleTitle from "../../articles/ArticleTitle";

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Manang – Srí Kharka" date="Středa 9. 5."/>
            <p>Jen co se vzbudíme a mrkneme z okna, překvapí nás čerstvá vrstva sněhu. Šárinka má velkou radost, menší
                už, když to později roztaje. Po snídani vyrazíme do vesnice zařídit pár věcí. Má tu být info centrum,
                tak chceme zjistit, jestli tu mají bankomat, lékárnu a další informace. Info centrum je zároveň
                checkpoint, ale týpek neví absolutně nic. Řekne nám jedině to, že za plentou za námi sídlí doktor, který
                přijde v 10. Čekat se nám nechce a dobře děláme. Recepční hotelu, který nám vymění dolary za rupie, nás
                pošle do lékárny, kde dokonce potkáme bělochy! Máme radost. Jsou to 2 Britky, žijí tady, jedna z nich je
                dokonce doktorka. Zjišťujeme od nich, že cesta na Tilicho je v pohodě, což se liší od toho, co jsme
                slyšeli dřív od jakýchsi Američanů. Ti líčili, že je to hrozně náročné a nebezpečné a oni jsou pomalu
                jediní šťastlivci, kteří odtamtud vyvázli živí. Zjišťujeme i informace o výškové nemoci a radíme se, co
                s Šárky nachlazením. Nakonec koupíme sirup na kašel a celkem spokojení odcházíme.</p>
            <p>V hotelu balíme a vyrážíme směrem na Tilicho Lake, kam bychom měli za pár dnů dojít. Cesta je moc hezká,
                hned kousek za Manangem přes most přecházíme soutok dvou řek a drápeme se víc do kopce. První další
                vesnička se jmenuje Khangsar, není tu ale absolutně nic, ani k jídlu, ani k ubytování. Svačíme tedy
                sušené
                maso a pokračujeme nad údolím říčky převážně do kopce až do Srí Kharka. Míjíme rozestavěný guest house,
                potom odbočku na Yak Kharka, kudy se budeme za pár dní vracet na hlavní Annapurna circuit. Výlet na
                Tilicho Lake je totiž jen aklimatizační side trip k jezeru ve výšce 4900 mnm, který trvá zhruba 3
                dny.</p>
            <figure>
                <video controls>
                    <source src={video1Src} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <figcaption>Údolí za Manangem</figcaption>
            </figure>
            <p>Kolem druhé odpolední dorazíme do Srí Kharky. Jsou tu 2 guest housy, vybíráme si ten druhý, což je, jak
                později zjistíme, nejspíš špatná volba. Nejdřív si dáme jídlo a přemýšlíme, jestli nejít ještě dál, ale
                počasí rozhodne za nás. Během chvíle se zatáhne a guest house se začíná plnit. Ubytujeme se, zevlíme v
                jídelně, kde brzy začne být dost zima, ale místní odmítají zatopit, i když je o to prosíme. Do toho
                začne venku pršet a později dokonce sněžit. Jedna z pozitivnějších věcí je, že tu je sprcha. Ale
                elektřina nefunguje, tak je to trochu složitější. Kobka se sprchou nemá žádné okno, tak se musíme jít
                sprchovat společně a navzájem si svítíme čelovkou.</p>
            <p>Během zevlení v dining hallu, kde nám nakonec zatopí, ale jen jednou a později zas mrzneme, popíjíme
                čajík, hrajeme šachy a bavíme se s ostatníma. Téměř všichni, co tu jsou, se chystají na Tilicho Lake,
                ale sníh trochu komplikuje situaci. Je tu i pár nepálských guidů, podle kterých je cestou několik
                lavinových úseků a ve sněhu se tam nedoporučuje chodit. Vzdát se Tilicha se nám ale nechce, tím spíš,
                když se od někoho dalšího dozvídáme, že Thorong La Pass má být údajně 11. a 12. 5. zavřený. Pokud bychom
                na Tilicho nešli, vychází nám, že půjdeme přes průsmyk právě 12. 5.</p>
            <p>Zvažujeme různé varianty, ale nakonec odsouváme rozhodnutí na ráno.</p>
        </div>
    )
}, [])