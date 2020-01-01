import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D3_plommer.jpg";
import img2Src from "../../../images/norsko2017/D3_Hardangerfjord.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Plommer");
const img2 = buildLightboxImage(img2Src, "Hardangerfjord cestou do Eidfjordu");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Nepovedená Trolltunga" date="Čtvrtek 7. 9. 2017"/>
        <p>Vzbudili jsme se ve čtvrtek ráno po propršené noci, všude bylo mokro a mraky zakrývaly i hory okolo. V plánu
            bylo dojet k Trolltunze, jenže Míša opět běhal na záchod. Zvažovali jsme tedy, jestli raději nejet k
            doktorovi ještě před víkendem. Volali jsme do ČSOB a zjišťovali jsme, jak je to s pojištěním v zahraničí.
            Zjistili jsme, že by to byly děsné obstrukce a vlastně nám ani nebyli schopni říct, jestli by nám výdaje za
            ošetření v zahraničí proplatili, protože Míša už do Norska s potížemi odjel. Rozhodli jsme se tedy
            pokračovat k Trolltunze, děj se vůle boží. V Roldal jsme ještě nakoupili, v autě posnídali a pak hurá na to.
            Poprvé jsem řídila automat a vlastně mi to přišla trochu nuda, ale rychle jsem si na to zvykla. <Smile/></p>
        <p>Co se týče Trolltungy, nebyli jsme si jisti, jak to tam bude vypadat. Četli jsme, že je třeba nechat auto na
            parkovišti, odkud je to na Trolltungu ještě asi 8 hodin hikování. V plánu jsme měli vyrazit, někde přespat a
            další den ráno mít Trolltungu sami pro sebe, než se tam nahrnou davy. Parkování mělo podle guidů stát 300
            NOK, ale nebylo jasné, jestli na den, nebo na jak dlouhou dobu. Říkali jsme si ale, že tam dorazíme a
            uvidíme. Cesta trvala asi 2 hoďky, jeli jsme i trajektem. Dojeli jsme až do města Odda, odkud to byl už jen
            kus klikaté cesty do kopce. Když jsme dorazili na horní parkoviště, bylo tu už dost aut. Bohužel jsme ale
            zjistili, že 300 NOK stojí parkování max. 16 hodin, 16-24 hod stojí 600 NOK a ještě delší doba 1200 NOK.
            No, my bychom potřebovali víc jak 24 hodin. Šílený peníze. Po chvíli zvažování jsme se na to vykašlali, opět
            jsme změnili plán a rozhodli jsme se jet rovnou až do NP Hardangervidda. Cestou jsme se párkrát zastavili na
            vyhlídkách podél cesty a taky si dali sváču / oběd (jogurt pro mě a suchary pro Míšu).</p>
        <p>Ještě před Hardangerviddou jsme se chtěli stavit v lékárně, nejbližší byla v Odda. Lékárnu jsme našli celkem
            rychle a Míša se lékárnici pokoušel vysvětlit, co ho trápí, ale moc nám nepomohla. Volali
            jsme ještě do Komerčky, kde měl Míša taky cestovní pojištění ke kartě a tam byli naštěstí trochu
            vstřícnější, řekli nám, že můžeme jít k doktorovi kamkoliv a že si hlavně máme nechat lékařskou zprávu.</p>
        <p>Rozhodli jsme se využít příležitosti, když jsme byli v civilizaci a zašli jsme k doktorovi rovnou. Lékárnice
            nám předtím poradila, kam jít, takže jsme to našli celkem snadno. Kupodivu jsme ani nečekali dlouho,
            doktorka Míšovi vzala krev a z rozboru krve ale naštěstí nevzešlo nic závažného, takže nám doktorka poradila pokračovat v braní Imodia, který Míša bral už od prvního dne. Dobrá
            rada nad zlato! Platili jsme asi 200 NOKů, takže docela v pohodě. V Oddě bylo i infocentrum, tak jsme toho využili a šli se tam poptat. Dozvěděli jsme
            se něco, co jsme nechtěli slyšet, a to, že cestou z Oddy směrem, kam jsme jeli, je uzavírka a kyvadlová
            doprava. Paní nám ukázala časy, kdy je možné naším směrem projet. Bylo to asi až za hodinu a půl, takže jsme
            zašli ještě do obchodu poblíž a pak zevlili v autě. Cesta byla děsná, rozbitá, úzká, klikatá, děsně lilo a protijedoucím autům se špatně vyhýbalo. Všimli jsme si ale, že cestou je hodně
            ovocných stromů a potom jsme začali potkávat i stánky podél silnice s nápisem Frukt nebo Plommer, kde byly
            vyrovnány boxy s ovocem, kasička a cenovky. Koupili jsme si za 30 NOKů blumy a byly výborný!</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Když jsme se znovu napojili na normální silnici, podařilo se nám málem zabloudit. Cestou uprostřed tunelu
            jsme na velikým kruháči omylem špatně odbočili a místo na Eidfjord jsme zamířili na Bergen… Uvědomili jsme
            si to až potom, co jsme přejeli velký zpoplatněný most, kde jedna jízda stála 150 NOKů. Nikdo to po nás
            nechtěl, tak jsme doufali, že to nebudeme muset platit, protože by to bylo úplně zbytečný… No, je asi jasný,
            jak to dopadlo. <Smile/></p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Protože Míšovi pořád nebylo nic moc, ubytovali jsme se opět pod střechou, v chatičce po cestě kousek od
            Hardangerviddy, za městečkem Eidfjord. Byl to areál s jedním barákem, kde byla recepce, restaurace,
            ubytování, koupelny a potom pár samostatných chatiček venku. A na recepci pracovala Slovenka! <Smile/> V chatičce
            byla postel, malinkatá kuchyňka s plotýnkama, stůl, židle, topení. Hezky jsme si zatopili, vykrámovali stan
            a spoustu věcí, abychom je usušili, a dali se do vaření večeře. To, co vzniklo, bylo úplné gastroporno,
            dokonce to mnohonásobně předčilo rýži s tuňákem. Protože jsme s sebou měli spoustu vlastnoručně usušeného
            hovězího masa, napadlo nás udělat si vývar. A aby to mělo šmrnc, přidali jsme do hrnce rovnou vařit i rýži,
            no to bude luxusní polévka! Jenomže, vařením ve vodě maso totálně ztratilo chuť, naopak voda byla od
            pepře šíleně pálivá a ten vývar, na který jsme se těšili, byl navíc úplně bílej a zakalenej od rýže, kterou
            jsme v něm vařili… Dobrou chuť!</p>
        <p>Chuť jsme si spravili sprchou, která byla zadarmo a tekla úplně horká. Pecka! Bůhví, kdy zas budeme mít
            příležitost se umýt. Šli jsme spát brzy a spalo se nám krásně…</p>
    </div>)
}, [img1, img2])
