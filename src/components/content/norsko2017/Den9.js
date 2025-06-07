import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D9_Gjende.jpg";
import img2Src from "../../../images/norsko2017/D9_svaca.jpg";
import img3Src from "../../../images/norsko2017/D9_Bessegen.jpg";
import img4Src from "../../../images/norsko2017/D9_dolu.jpg";
import img5Src from "../../../images/norsko2017/D9_poza.jpg";
import img6Src from "../../../images/norsko2017/D9_stan.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/norsko2017/D9_cesta.mp4";

const img1 = buildLightboxImage(img1Src, "Jezero Gjende");
const img2 = buildLightboxImage(img2Src, "Sváča nad jezerem Bessvatnet");
const img3 = buildLightboxImage(img3Src, "Bessegen - hřeben mezi dvěma jezery");
const img4 = buildLightboxImage(img4Src, "Sestup dolů k jezeru Gjende");
const img5 = buildLightboxImage(img5Src, "Póza u jezera");
const img6 = buildLightboxImage(img6Src, "Dnešní nocležiště");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Bessegen" date="Středa 13. 9. 2017"/>
        <p>Vstali jsme brzy, protože nás čekalo vystěhování z chatičky a trek Bessegen mezi jezery Gjende a Bessvatnet.
            Cesta trvala asi půl hoďky a tentokrát bylo i hezky a měli jsme parádní výhledy.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Cesta k jezeru Gjende</figcaption>
        </figure>
        <p>Na parkovišti u jezera Gjende jsme zaplatili parkovné 120 NOKů, převlékli se do hikovacího a potom, co Míša
            přestal zdržoval a konečně se nachystal, jsme vyrazili na tůru. Hned na začátku nás čekal pěkný stoupák,
            takže jsme se rychle zahřáli a sundali pár vrstev. Na samotný vršek nám trvalo vystoupat asi hodinu a půl,
            následovala dlouhá rovná planina, kde nebylo nic vidět, ani žádné jezero. Měli jsme hlad, ale chtěli jsme si
            dát sváču až na nějakém pěkném místě s výhledem, jenže ten nikde. Bylo ale fajn, že nikde nebyli ani lidi,
            hodně turistů jde totiž Bessegen jen jedním směrem a zpět se sveze loďkou po jezeře Gjende, a většina lidí
            ten den šla v protisměru a byli ještě hodně daleko před námi. A ti, co šli s námi, jsme hned na začátku
            předběhli. <Smile/></p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Jakmile jsme došli k hřebeni a konečně jsme poprvé spatřili jezera, už jsme si museli dát sváču, jinak bychom
            asi umřeli hlady. Nebyl to ještě ten klasický instagramový ikonický pohled, ale i tak jsme byli nadšení.
            Hlavně z toho, že je hezky a sluníčko, protože jen za slunečného počasí hezky vynikne rozdíl barev obou
            jezer. Po sváče nás čekalo docela velké klesání dolů, chvílema dost strmé, ale nějak zvlášť náročné nám to
            nepřišlo. O kus níž jsme potkali dvě starší Dánky, které nás zastavily a ptaly se na cestu. Měly trochu
            strach. A my, jakmile jsme se otočili a viděli, co jsme všechno slezli, jsme se docela zděsili, takhle
            zezdola to totiž vypadalo jako dost strmá skála. Uklidnili jsme je ale, že to vypadá
            hůř, než to je, a pokračovali jsme dál k samotnému úseku mezi dvěma jezery, kde jsme si na krásném místě
            dali další pauzu.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1}/>
        <p>Nebyli tu vážně skoro žádní lidé, čemuž jsme ani nechtěli věřit. Nikdo nám tedy nepřekážel na fotkách ani v
            dalekohledu, kterým jsme se rozhlíželi po okolí. Dolní jezero bylo světlejší, až dozelena, a horní tmavě
            modré, kvůli rozdílné nadmořské výšce a taky podloží jezera.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2}/>
        <p>Všichni turisté chodí po zmíněném úseku mezi jezery dál dozadu a pak sejdou právě dolů na trajekt. My jsme
            ale na mapách.cz našli zkratku přímo dolů k jezeru, která nám měla ušetřit asi polovinu cesty a i peníze za
            loďku. No, mělo nás napadnout, že když je čárkovaná, nebude to úplně sranda. Vedla přímo dolů přes nahuštěné
            vrstevnice, byl to pěkný sešup a zřejmě tu nikdo nechodil. Postupovali jsme tím pádem dost pomalu. Celá
            zkratka mohla mít asi kilometr, ale nám trvalo sejít dolů 3 hodiny. Bylo to prudké, zdlouhavé a
            nekonečné. Já jsem z toho samozřejmě měla docela nervy, protože jsem se několikrát viděla rozsekaná dole pod
            skálou. Na jednom místě, kde se fakt muselo sejít skoro kolmo po skále s miniaturními stupínky, jsem se
            dokonce rozbrečela. Nakonec jsme to ale zvládli a dole se mi dost ulevilo.</p>
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3}/>
        <p>Cesta podél jezera nejdřív vypadala, že ani neexistuje, takže jsme si nadávali, že než dojdeme k autu, mohli
            jsme bývali pětkrát dojít k trajektu. Naštěstí se ale cesta brzy objevila, a nakonec se ukázala jako moc
            hezká, lemovaly ji pěkné výhledy na jezero a i pláže, kde by se dalo koupat, kdyby voda měla tak o 15 stupňů
            víc. <Smile/> K autu jsme dorazili asi za další hodinu a půl, a nakonec ne o tolik později než trajekt.</p>
        <Image lightboxImage={img5} openLightbox={openLightbox} index={4}/>
        <p>Zpátky u parkoviště jsme se ještě stavili v místní turistické chatě, kde jsme chtěli vyzjistit informace o
            výstupu na Galdhøpiggen, nejvyšší horu Norska, která má skoro 2500 mnm a je taky v NP Jotunheimen. Cestou
            jsme na ni koukali dalekohledem, bylo tam docela dost sněhu a nahoře to vypadalo, že je i nějaká
            restaurace. V chajdě nám moc neporadili, ale dali nám telefonní číslo do chaty, odkud se na Galdhøpiggen
            vyráží. Tam nám řekli, že počasí pro výstup další den by sice mělo být v pohodě, ale restaurace nahoře je
            zavřená a cestou je hodně sněhu, takže je to dost náročné. Rozhodli jsme se tedy, že se na to vykašleme,
            museli bychom se stejně přesouvat další 2 hodiny, a to se nám nechtělo, protože jsme si den předem vyhlídli na spaní pěkné
            místečko na polňačce u jezera za jedním karavanovým kempem.</p>
        <p>Bylo tu i ohniště, takže jsme určitě nebyli první, kdo tu spal. Našli jsme rovný plácek na spaní a k večeři
            si uvařili špagety s tomatovou omáčkou a houbama, co Míša nasbíral. Udělali jsme si i oheň, i když trvalo
            pěkně dlouho ho rozpálit, protože všechno dříví v okolí bylo pořádně nasáklé vodou. Nakonec se nám ale
            zadařilo a když jsme se trochu zahřáli, osmělili jsme se natolik, že jsme se šli i vykoupat do jezera. No,
            vykoupat je silné slovo, byli jsme rádi, že jsme chvíli vydrželi kousek od břehu a rukama se ošplouchli.
            Bylo to pěkně ledový, ani jsme se nezvládli potopit. Já jsem musela jít na etapy, protože než jsem se stihla
            trochu umýt, začly mi šíleně mrznout nohy. Takže jsem šla asi natřikrát. <Smile/> Ale nakonec to bylo fajn, okolní
            vzduch byl teplejší, takže nás docela zahřál.</p>
        <Image lightboxImage={img6} openLightbox={openLightbox} index={5}/>
        <p>V noci jsme ještě vstávali na polární září, ale bohužel jsme byli opět neúspěšní.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6])
