import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D5_rano.jpg";
import img2Src from "../../../images/norsko2017/D5_vyrazime.jpeg";
import img3Src from "../../../images/norsko2017/D5_stoupame.jpg";
import img4Src from "../../../images/norsko2017/D5_chaty.jpg";
import img5Src from "../../../images/norsko2017/D5_alternativni_cesta.jpg";
import img6Src from "../../../images/norsko2017/D5_panorama.jpg";
import img7Src from "../../../images/norsko2017/D5_kolem_jezera.jpg";
import img8Src from "../../../images/norsko2017/D5_stan.jpg";
import img9Src from "../../../images/norsko2017/D5_selfie.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Dobré ráno!");
const img2 = buildLightboxImage(img2Src, "Vyrážíme na cestu");
const img3 = buildLightboxImage(img3Src, "Kocháme se výhledy");
const img4 = buildLightboxImage(img4Src, "Chajdy");
const img5 = buildLightboxImage(img5Src, "Alternativní cesta");
const img6 = buildLightboxImage(img6Src, "Panorama s jezerem");
const img7 = buildLightboxImage(img7Src, "Kolem jezera");
const img8 = buildLightboxImage(img8Src, "Dnešní camping spot");
const img9 = buildLightboxImage(img9Src, "Selfíčko");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Druhý den v NP Hardangervidda" date="Sobota 9. 9. 2017"/>
        <p>Spali jsme asi až do půl 9 a pozitivní bylo, že nepršelo! K snídani jsme riskli ovesnou kaši, i Míša.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Pobalili jsme, u řeky jsme si vyčistili zuby a vyrazili na cestu. Zpočátku jsme šli celkem bažinou, takže
            jsme si zabahnili boty. Po chvíli jsme začali prudce stoupat do kopce. Nahoře jsme si dali přestávku a             sváču. Bylo odtud krásně vidět na okolí s klikatící se řekou se spoustou odnoží a sem tam nějakou tou
            chatičkou. V dálce se honily tmavé mraky.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Když jsme pokračovali dál, příroda se proměnila, nebyly už bažiny, ani řeka, jen sem tam jezírko a malé
            kopečky s klikatou stezkou nahoru dolů. Hardangerviddu jsme měli jako na dlani, včetně jednoho z největších
            vrcholů NP, který vypadal jako klobouk.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox}/>
        <p>Po čase jsme dorazili k další chatové osadě, kde bylo i rozcestí. Začalo zrovna pršet, takže jsme nandali
            pláštěnky a schoulili se pod střechou jedné chatičky. I tak na nás ale docela pršelo. Zvažovali jsme, kudy
            dál. Náš plán byl trochu ambiciózní vzhledem k tomu, že Míša pořád nebyl zdaleka ve své kůži. Studovali jsme
            mapy.cz a měli jsme možnost zvolit místo značené a předem plánované trasy asi o 10 km kratší, jenže
            neznačenou a v mapách.cz jen přerušovanou cestu.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox}/>
        <p>Trochu jsme se kvůli tomu dohadovali, mně se to nezdálo, s těma přerušovanýma cestičkama na mapách.cz jsme se
            už jednou napálili a nerada bych, abychom tady někde ztratili cestu a zapadli v bažině. Míša naopak
            argumentoval, že chataři si tudy určitě vyšlapali zkratku, aby nemuseli od parkoviště tak daleko a byl dost
            otrávenej, takže jsem nakonec souhlasila. Naštěstí byla cesta ale v pohodě, byla opravdu prošláplá a i
            značená kamennýma mohylkama.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox}/>
        <p>Alternativní cesta nás zavedla až nad krásné velké jezero, na které jsme zvrchu hezky viděli a potom k němu
            začali sestupovat. Naskytla se nám úžasná panoramata, do jezera z jedné strany přitékala řeka, z druhé z něj
            zas vytékala, okolí bylo podzimně zbarvené do hnědočervena a nad tím vším byly trochu zlověstné tmavé mraky
            nacucané vodou. Naštěstí ale i chvílema svítilo sluníčko. Vytáhli jsme dalekohled a sledovali okolí, taky
            jsme hledali sobi, kteří by v Harganderviddě měli žít v bohatém počtu. Bohužel jsme ale žádné neviděli.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox}/>
        <p>Dole nad jezerem jsme potkali první lidi ten den, byli to nějací rybáři. Napadlo nás se vsadit, kolik lidí
            ten den potkáme, já tipovala 6, Míša 11. Tak schválně. Jak jsme postupně scházeli a obcházeli jezero, cesta
            byla šíleně bažinatá, takže jsme pořád něco přeskakovali, přelézali přes drny trávy a větve, abychom
            nezapadli.</p>
        <Image lightboxImage={img7} openLightbox={openLightbox}/>
        <p>Po chvíli jsme se napojili na cestu, kterou bychom přišli, kdybychom zvolili původní delší trasu a pomalu
            jsme začali přemýšlet, kde zakempíme. Chtěli jsme u řeky, abychom byly u zdroje vody, jenže všude to bylo
            hodně bažinaté. Pomalu jsme se podle mapy blížili k turistické chatě Vivelid, kterou jsme viděli první den
            zdálky z druhé strany řeky. Nakonec jsme našli pěkné a relativně i suché místečko kousek od vody, kde jsme
            se „ubytovali“.</p>
        <Image lightboxImage={img8} openLightbox={openLightbox}/>
        <p>Byly tu velké balvany, díky kterým byl k vodě dobrý přístup. Postavili jsme stan, nechali si vevnitř věci a
            chtěli jsme se jít podívat k té turistické chatě, že bychom si tam třeba dali i něco k jídlu. Cesta trvala
            nakonec docela dlouho, a hlavně byla prudce z kopce a samá bažina, takže nám bylo jasné, co nás čeká cestou
            zpět. U chaty jsme překvapivě potkali nějakého dědu, který se tam na terase vykecával do telefonu. Po chvíli
            sem dorazili i nějací klučinové z Belgie, kteří se ptali na ubytování. Děda je ubytoval, ale bohužel
            nevařil, takže jsme šli dál, trochu jsme obhlídli okolí, a nakonec se vrátili ke stanu.</p>
        <Image lightboxImage={img9} openLightbox={openLightbox}/>
        <p>Počítali jsme, kolik lidí jsme potkali, a vyhrála jsem! <Smile/> Cestou zpět jsme trhali výborné borůvky, kterých
            bylo všude kolem spoustu. K večeři jsme si museli dát něco z vlastních zásob, které byly už dost chabé. Já
            skončila u čínské polívky a Míša u tradičních sucharů. Bylo celkem pěkně, takže jsme poseděli u řeky a
            plánovali, že v noci budeme sledovat polární záři, konečně, protože všechny předchozí noci bylo zataženo.
            Kolem deváté jsme šli zalehnout, čekali, až se setmí, abychom mohli jít obhlídnout tu záři. Samozřejmě jsme
            přitom dost usínali, ale kolem desáté jsme se přece jen vypakovali, jenže už byly mraky. Dali jsme si ale
            budíka na 1:00, že to zkusíme znovu. Míša byl dost zpomalenej a děsně mu trvalo, než se oblékl. Já už byla
            dávno natěšená venku, svítil i měsíc, takže jsem doufala, že něco uvidíme, vytáhli jsme i dalekohled, ale
            prdlajs. Během chvíle se navíc zas zatáhlo, takže smůla. No, třeba příště.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6, img7, img8, img9])
