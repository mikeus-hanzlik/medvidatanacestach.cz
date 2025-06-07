import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D12_k_autu.jpg";
import img2Src from "../../../images/norsko2017/D12_panorama.jpg";
import img3Src from "../../../images/norsko2017/D12_AOR.jpg";
import img4Src from "../../../images/norsko2017/D12_altanek.jpg";

import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Cestou zpátky k autu");
const img2 = buildLightboxImage(img2Src, "Poslední pohled na Rondane");
const img3 = buildLightboxImage(img3Src, "Atlantic Ocean Road");
const img4 = buildLightboxImage(img4Src, "Altánek, u kterého jsme spali");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Atlantic Ocean Road" date="Sobota 16. 9. 2017"/>
        <p>K snídani jsme si dali opět kaši a znovu i s borůvkami, které jsme posbírali kolem. Potom jsme pobalili a
            vydali se na cestu zpět k autu. Všude už bylo spoustu lidí, kteří sem přijížděli na víkend, tak jsme byli
            rádi, že už jdeme pryč. Tentokrát jsme měli na cestu krásné počasí a dali jsme si u dřevěného sezení u auta
            i sváču.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Čekala nás cesta na sever asi 400 km dlouhá, až na Atlantic Ocean Road, což je taková klikatá silnička
            vedoucí přes ostrůvky a mosty mezi nimi, může být i nebezpečná, protože při bouřivém počasí vlny dosáhnou až
            na mosty a mohou auto pěkně ošplouchnout. Cestou jsme jeli mezi NP Rondane a Dovrefjell a neustále jsme měli
            výhledy na majestátní hory kolem. Časem jsme začali vídat cedule na Trondheim a chvíli jsme přemýšleli,
            jestli přece jen nejet až tam, ale nakonec jsme to zavrhli, kromě pár hezkých baráčků tam toho tolik asi
            není a my jsme se pomalu dostávali do časového pressu. Dojeli jsme ale do města Kristiansund, což je jedno z
            asi 10 stotisícových měst v Norsku. Tady jsme nakoupili a pokračovali na Atlantic Ocean Road. Já jsem byla
            celá natěšená, jak to bude vypadat. Cesta byla zpoplatněná, ale naštěstí to nebylo moc a nebylo tu ani moc
            aut. Zastavovali jsme hodně na vyhlídkách a sem tam jsme vyběhli na kopečky kolem, abychom se
            rozhlédli.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        <p>Jen co jsme celou Road projeli, začalo se pomalu stmívat a my jsme nevěděli, kde budeme spát. Začali jsme
            tedy koukat kolem cesty, kam by se dalo zajet. Na jednom místě jsme zahlédli směrovky na nějakou jeskyni a
            po polňačce jsme kus popojeli, až jsme našli celkem pěkné místo u cesty i s ohništěm. Nebylo to ale zas tak
            nic extra a byli bychom tam dost na ráně, tak jsme jeli dál. A dobře jsme udělali. Najeli jsme na celkem
            velkou cestu a já jsem se (i při řízení!) pořád rozhlížela kolem, až jsem na kopci nad silnicí zahlédla
            jakýsi altán či co. Míša to našel na mapě a nanavigoval nás až na jakési parkoviště / staveniště nad
            vesnicí. Nechali jsme tu Hybrida a šli to omrknout. Nahoře byl parádní altánek se sezením, a dokonce tu byl
            i gril!</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3}/>
        <p>Vrátili jsme se tedy pro krosny, postavili stany a uvařili si kuskus s olivami, rajčátky a pestem. Dost
            fučelo, takže jsme museli vařit s karimatkou kolem vařiče, ale večeře byla luxusní. Večer jsme na sebe
            nabalili všechno možné a kochali se výhledy na údolí, moře a ostrůvky na něm. V noci nás budili nějaký
            magoři, co jezdili dole po silnicích neustále sem tam na motorkách a dělali příšernej hluk. Mě navíc začlo
            bolet v krku.</p>
    </div>)
}, [img1, img2, img3, img4])
