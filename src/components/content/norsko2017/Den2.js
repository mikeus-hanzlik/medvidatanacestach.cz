import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/norsko2017/D2_davy.jpg";
import img2src from "../../../images/norsko2017/D2_vyhledy.jpg";

import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1src, "Davy cestou na Preikestolen");
const img2 = buildLightboxImage(img2src, "Vyrážíme");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Preikestolen" date="Středa 6. 9. 2017"/>
        <p>Ráno dokonce vysvítávalo i sluníčko. Střevní potíže neustávaly, ale i tak jsme natěšení vyrazili autem na
            Preikestolen, posvátný kus skály tyčící se nad fjordem. Po zaparkování nás čekal asi čtyřhodinový hike tam a
            zpět. Nasadili jsme naše týmové Fjällräven kloboučky, které jsme pořídili, když jsme šli pořizovat něco
            úplně jiného. Počasí bylo jedno z nejlepších, jaké jsme za celé Norsko měli, na chvíli jsme se dokonce
            svlékli do triček. Výhledy na fjordy byly taky parádní, co bylo horší, byly davy lidí.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Na Preikestolenu se dokonce stály fronty, aby se tam lidi mohli vyfotit. Radši jsme se tam tedy moc
            nezdržovali a našli jsme si místo toho mnohem lepší místečko, kde jsme
            navíc byli úplně sami. Posvačili jsme (Míša suchary) a pomalu se vydali zpátky.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Po Preikestolenu jsme měli v plánu jet ještě na Kjerag, jenomže jsme zjistili, že trajekt, na který nás
            naváděl Google, už ten den vůbec nejede. Autem by nám to ale trvalo děsně dlouho, takže jsme podruhé (a ne
            naposledy) pozměnili plány. Vydali jsme se rovnou autem směrem k Trolltunze. Protože to ale bylo 5 hodin
            jízdy, bylo nám jasné, že tam už dojet nestihneme, takže jsme se v podvečer, když se začalo smrákat, jali
            hledat místo ke spaní. Zastavili jsme na pěkném odpočívadle u vodopádů kousek od cesty a našli i hezký
            plácek na stan, jenže to vypadalo, že slouží i jako WC.</p>
        <p>Nakonec jsme dojeli až do vesnice Roldal, kde to podle map.cz vypadalo, že by se dalo zakempit někde na
            plážích podél jezera. Realita byla trochu mizernější, místo pláží jsme se ocitli v průmyslovém areálu, a tak jsme
            radši zajeli do místního kempu, kde kromě nás bylo jen pár dalších lidí.</p>
    </div>)
}, [img1, img2])
