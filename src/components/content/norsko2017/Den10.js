import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D10_cesta_do_kempu.jpg";
import img2Src from "../../../images/norsko2017/D10_stan.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Cesta do kempu");
const img2 = buildLightboxImage(img2Src, "Stanování u jezera Rondvatnet");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Přesun do NP Rondane" date="Čtvrtek 14. 9. 2017"/>
        <p>Ráno bylo celkem hezky, tak jsme si udělali snídani venku. Míša nám ke kaši natrhal i borůvky, kterých bylo v
            okolí spoustu, a vznikla nám tak artová fotka na Instagram. <Smile/> Dnes jsme měli na programu přesun až na
            parkoviště k jezeru Rondvatnet v NP Rondane. Cesta trvala asi dvě hodiny a stavovali jsme se ve městě Otta
            na nákup, doplnění vody a dofouknutí pneumatik. Z města Otta jsme stoupali klikatou silničkou nahoru do hor,
            odkud bylo krásně vidět do údolí na řeku. Celá okolní příroda už byla dost podzimní, hrála všemi
            barvami.</p>
        <p>Nechali jsme auto na parkovišti a dál museli pokračovat až k jezeru Rondvatnet pěšky. Počasí se trochu
            proměnilo a začalo lejt, takže jsme v autě čekali na vhodnou chvíli vyrazit. Potom jsme pobalili
            věci a nasadili krosny. Měli jsme o dost víc věcí, než kdybychom šli celou dobu s krosnama, ale protože jsme
            měli v plánu zakempit u jezera a stan s některýma věcma nechat tam, dalo se to přežít. Cesta k jezeru trvala
            asi hodinu a čtvrt (bylo to cca 6 km) po široké cestě, kudy jezdili lidi i na kolech. Byly odtud krásné
            výhledy na přibližující se hory nad jezerem.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Počasí se dost honilo a cestou jsme ještě jednou zmokli. U jezera byla jedna turistická chata, kde se dalo
            schovat, dát si něco k jídlu a i přespat. Zjistili jsme tam, že musíme zaplatit poplatek i za stan, pokud
            chceme stanovat v okolí jezera, ale na oplátku můžeme využívat sušárnu a umývárky. Ubytovali jsme se na dvě
            noci a nejdřív jsme si dali na zahřátí špenátovou polévku s chlebem, která byla úplně luxusní.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Postavili jsme stan nad jezerem, přebalili věci a s malým batůžkem jsme se ještě vydali na kratší výlet. Bylo
            ale dost hnusně, lilo a děsně fučelo, takže jsme se asi po hodině vrátili a už jen tak zevlili. Večer
            jsme se mohli vysprchovat v umývárkách, kde byly parádní horké sprchy a já se musela vyloženě přemáhat,
            abych odtamtud vylezla. V noci dělali venku nějací Norové dost bordel, takže nás to trochu rušilo, nechápali
            jsme, že jim není zima, mohlo být jen pár stupňů nad nulou.</p>
    </div>)
}, [img1, img2])
