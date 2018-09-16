import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/chulu.jpg";
import img2Src from "../../../images/nepal/jeskyne.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Annapurna II");
const img2 = buildLightboxImage(img2Src, "Annapurna II v mracích");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Ngawal – Bhraga" date="Pondělí 7. 5."/>
            <p>Budíme se do nádherného rána bez mráčku. Tradiční snídaňová oat porridge je tady mexa porce, takže to
                sotva sníme. Balíme, filtrujeme vodu a kolem půl 10 vyrážíme na cestu. Do Bhragy před Manangem volíme
                horní, trochu delší a prý i hezčí cestu, nepotkáváme tam téměř nikoho a je to vážně pecka. Nejdřív
                šplháme nahoru k obrovskému opravenému Buddhistickému chrámu, kde je spoustu modlitebních vlaječek, pak
                pro změnu prudce dolů do vesničky Chulu.</p>
            <p>Nepotkáváme ani nikoho místního, skoro to vypadá, jako by byla vesnička opuštěná. O to víc si to užíváme,
                je tu totiž moc krásně. I když jsme tam nikdy nebyli, takhle si představujeme kanadskou přírodu. Dlouhé
                rovné pláně, pasoucí se koně, na obzoru se týčící obrovské zasněžené hory.</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Za chvíli, uprostřed toho ničeho, narazíme na další ACAP checkpoint. Týpci sedí na lavičce u dřevěného
                stánku, zapíšou si nás do sešitu, dají nám razítko do permitů a můžeme jít dál. Checkpointy jsou tu
                vůbec zajímavé. Vzhledem k tomu, že si nás zapisují jen podle křestních jmen (příjmení jsou na opsání
                asi moc složitá), by nás zajímalo, jestli je to vůbec k něčemu… Blížíme se k vesnici Bhraga, a
                dohadujeme se, co dělat dál. Další den bychom rádi na aklimatizační výlet k Ice Lake, kam je nejlepší
                vyrážet přímo z Bhragy, ale abychom tu dnes končili, na to je ještě dost brzy. Nakonec objevíme na mapě
                jeskyni Milarepa, měla by být zhruba 4100 mnm vysoko, což by znamenalo oproti Bhraze cca 600 m převýšení
                a slušný odpolední aklimatizační výlet.</p>
            <p>Hned na kraji vesnice narazíme na hotel New Yak, který provozuje sestra hostitelky z Ngawalu. Vypadá
                dobře a hned se tam tedy ubytujeme. Jsme tu brzy, tak vyfasujeme jeden z nejlepších pokojů, znovu s okny
                na 3 strany. Opět je tu i evropské WC a celkově to vypadá docela civilizovaně. Většinu věcí necháváme na
                pokoji a vyrážíme k Milarepa’s cave. Podle paní domácí by nám to mělo trvat cca 3 hodiny tam i zpět. Jen
                co přejdeme řeku, hned začínáme stoupat. A je to slušnej krpál, ale oproti stoupáku do Ghyaru se nám jde
                o poznání líp. Necháváme Bhragu pod sebou a jak nabíráme výškové metry, otevírají se nám výhledy i na
                druhou stranu údolí, odkud jsme přišli. Postupně se zatahuje a přituhuje, musíme se přiobléknout. Taky
                funíme jako důchodci, na to si holt musíme zvykat.</p>
            <p>Když konečně vyšplháme až nahoru, kromě jeskyně tu
                najdeme jen mírně vyhloubený prostor ve skále, kde za vrátky trůní socha Buddhy. Kromě něj je tu spoustu
                modlitebních praporků, rýže a dalších předmětů. Trochu drze vlezeme až k Buddhovi, protože je tu
                závětří, usedneme na modlitební lavičky a dáme si sváču. Už jen pár tisíc a pár stovek metrů do výšky
                nad námi je Annapurna II (7555 mnm). Ledovec pod ní se plazí skoro až k nám.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Cestou zpět se skoro nezastavujeme, stahují se temná mračna a my bychom neradi zmokli. Stíháme to tak
                tak, později opravdu prší. Hostel je už plný a v jídelně si není skoro kam sednout, tak sdílíme stůl s
                Izraelským párem, který je ve skutečnosti z Uruquaye / Brazílie. Slečně je špatně z výškové nemoci a my
                jsme rádi, že nás zatím nedohnala. Dnešní aklimatizační výstup se nám bude určitě později hodit.
                Večeříme curry, česnečku a vajíčka, filtrujeme vodu a připravujeme se na další den.</p>
        </div>)
}, [img1, img2])