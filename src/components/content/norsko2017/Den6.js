import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D6_Flam.jpg";

import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";
import video1Src from "../../../images/norsko2017/D6_Voringfossen.mp4";

const img1 = buildLightboxImage(img1Src, "Vesnička Flåm");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Jedeme dál" date="Neděle 10. 9. 2017"/>
        <p>Ráno jsme se vzbudili až po osmé a byli jsme krásně vyspalí. Udělali jsme si spoustu čaje, abychom doplnili
            tekutiny, navíc jsme už skoro ani neměli vodu, takže jsme se chtěli zavodnit dopředu. K snídani jsme
            pojídali zbytky – čokoládu, oříšky, sojové mlíčko, Míša hlavně sušené banány. Pršelo, takže jsme moc
            nepospíchali. Po desáté jsme konečně vyrazili a tentokrát tedy už zpět k autu. Absolvovali jsme znovu cestu
            k chatě, potom jsme přešli přes most a pokračovali stezkou, kterou jsme šli první den. Bylo tu ještě mnohem
            více bažin než předtím, takže se to dost vleklo a byli jsme nadšení, když jsme dorazili až k Hybridovi.
            Snědli jsme cestou skoro všechny zásoby, takže v autě jsme se vrhli na další mňaminky, abychom doplnili
            energii. A hurá dál!</p>
        <p>Dalším bodem programu byl vodopád Vøringfossen, snad nejvyšší v Norsku. Zaparkovali jsme u hotelu, odkud měly
            být podle průvodce nejhezčí výhledy. Byly tu udělány moc hezké cestičky se spoustou míst na okouknutí
            vodopádu. Byl opravdu obrovský a všude kolem se vznášela oblaka aerorosolu.</p>
        <figure>
            <video controls>
                <source src={video1Src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <figcaption>Vodopád Voringfossen</figcaption>
        </figure>
        <p>Pokračovali jsme směrem k městu Voss, kde jsme natankovali a i trochu nakoupili. Jeli jsme ještě přes
            Gudvangen a Flåm, v obou vesničkách jsme se zastavili, abychom si prohlídli fjordy. U Gudvangenu je nejužší
            fjord v Norsku a okolní hory se tyčí až do výšky 1700 mnm. Ve Flåmu jsem už kdysi byla, tak to bylo zajímavé
            srovnání. Je to vesměs turistická vesnička, odkud vyrážejí trajekty na projížďky po fjordech a taky odsud
            startuje stará železnice, která vede nahoru do hor. Míša tu vytáhl prut a chvíli jsme chytali, nic z toho
            ale nebylo, tak jsme pokračovali dál v cestě. Objížděli jsme okolní fjordy, částečně venkem, částečně
            tunely, a jeden z nich měl dokonce 25 km! Byl tak dlouhý, že vevnitř byly dokonce i odpočívadla.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Pomalu byl nejvyšší čas hledat místo ke spaní. Sjeli jsme z hlavní silnice a napojili se na alternativní
            starou cestu, kde nikdo nebyl, tak jsme koukali kolem, a nakonec jsme si u jednoho tunýlku všimli, že je
            vedle celkem široká pěšina. Zaparkovali jsme a šli to obhlídnout. Bylo tu dokonce i sezení, rovný plácek,
            nebylo sem z cesty vidět a byli jsme přímo nad řekou, ke které se dalo i slézt pro vodu.</p>
        <p>Vykrámovali jsme z auta věci, otřeli jsme mokré lavičky a dali jsme se do vaření, načež začalo pršet.
            Klasika! Všechno jsme tedy sbalili, uvařili si ve stanu, a – přestalo pršet! Takže jsme opět vylezli, a
            nakonec povečeřeli venku u stolu. Měli jsme vepřové maso z konzervy s rýží a bylo to moc dobrý. Seděli jsme
            pak ještě až do tmy u stolu a povídali si. Už třetí noc v kuse nás uspávalo hučení vody.</p>
    </div>)
}, [img1])
