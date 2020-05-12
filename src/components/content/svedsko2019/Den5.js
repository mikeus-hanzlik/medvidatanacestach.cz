import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/NaSneznice.jpg";
import img2src from "../../../images/svedsko2019/HoryUNorska.jpg";
import img3src from "../../../images/svedsko2019/CestouNahoru.jpg";
import img4src from "../../../images/svedsko2019/JaASnih.jpg";
import img5src from "../../../images/svedsko2019/Nahore.jpg";
import img6src from "../../../images/svedsko2019/CestouDolu.jpg";
import img7src from "../../../images/svedsko2019/Dole.jpg";
import img8src from "../../../images/svedsko2019/Vinecko.jpg";

import video1Src from "../../../images/svedsko2019/VideoSneznice.mp4";


import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Na sněžnicích");
const img2 = buildLightboxImage(img2src, "Hory na hranicích s Norskem");
const img3 = buildLightboxImage(img3src, "Zakuklenci");
const img4 = buildLightboxImage(img4src, "V ledovém království");
const img5 = buildLightboxImage(img5src, "Konečně nahoře");
const img6 = buildLightboxImage(img6src, "Cestou dolů do Arådalen");
const img7 = buildLightboxImage(img7src, "Stopy v Arådalen");
const img8 = buildLightboxImage(img8src, "Poslední vínečko za krbem");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Dobytí severního pólu" date="Pátek 15. 2." />
        <p>Pátek je náš poslední den v Galå Fjällgård. A protože si ho chceme užít naplno, vyrážíme na sněžnice. Vstáváme docela brzy (před devátou!),
            snídáme, připravujeme svačinu a kolem desáté už parkujeme na totálně zledovatělém parkovišti v Arådalen. Kromě nás je tu už jen jedno nebo
            dvě auta. Máme naplánovanou trasu na 1372 m vysokou horu Hundshögen. Je nádherně, sluníčko svítí a dokud jdeme schovaní mezi stromy, tak
            je i krásně teplo. Nejdřív musíme projít vesničkou, to je něco pro moje oči. Ty baráčky! Skoro nikdo tu ale není, potkáme jen nějaký pár
            se psem a většina chatiček je pokrytá vrstvou sněhu, takže sem majitelé jezdí spíš v létě. Jaká to škoda! Mít takovou chajdu, jsem tu
            pečená vařená.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Hned na začátek se docela zpotíme, sundaváme pár vrstev a jdeme jen v mikinách. Jakmile ale vylezeme ze stromů a keřů, začne se do nás
            opírat vítr. Celý kopec je úplně holý, nikde žádný porost. Čím výš jsme, tím více sněhu je, naskytuje se nám lepší výhled a taky je
            větší zima. Za chvíli na obzoru zpozorujeme veliké zasněžené hory. Po chvíli přemýšlení a studování mapy zjistíme, že to musí být hory u
            hranic s Norskem. Někde tam je i Åre, kde se koná MS v alpském lyžování.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} />
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <figcaption>Výstup na Hundshögen</figcaption>
        </figure>
        <p>Postupně vrstvíme více oblečení, až na sobě máme snad všechno, co jsme s sebou měli. Cesta je celkem nekonečná a i když je to bílomodrá
            nádhera, taky trochu vopruz, protože děsně fučí, my neslyšíme slova, hůlky nám vítr odfukuje do stran, že o ně skoro zakopáváme a
            musíme jít předklonění, abychom nespadli (nebo aspoň já).</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} />
        <Image lightboxImage={img4} openLightbox={openLightbox} />
        <p>Ke konci už jsem dost zpruzelá, sníh je navíc tak zmrzlý a nerovný, že po něm skoro nejde jít. Nakonec sundaváme sněžnice a konec vyjdeme
            jen po svých, jde to snad o něco líp. Myslím, že na horu snad nedojdu, táhnu se daleko za Míšou, jsem vzteklá a hlasitě nadávám (přes ten
            vichr mě stejně nejde vůbec slyšet), ale nakonec to přežiju. Výhled je odtamtud parádní a samozřejmě nikde nikdo.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox} />
        <p>Nahoře uděláme pár vrcholových fotek a bez zbytečného lelkování se vydáváme na cestu zpět. Ta už jde jako po másle, postupně se otepluje,
            my shazujeme vrstvy oblečení a dole ve vesničce v měkkém hlubokém sněhu na sněžnicích úplně skáčeme.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox} />
        <Image lightboxImage={img7} openLightbox={openLightbox} />
        <p>Odpoledne se jdeme ještě naposledy projet na běžkách, jsme přitom trochu smutní. Večer už jen zevlíme s vínečkem u krbu, dáváme si saunu a
            balíme. Asi v pravý čas, protože přichází obleva a do mokrého sněhu se po sauně už tak dobře neskáče. <Smile /></p>
        <Image lightboxImage={img8} openLightbox={openLightbox} />
    </div>)
}, [img1, img2, img3, img4, img5, img6, img7, img8])
