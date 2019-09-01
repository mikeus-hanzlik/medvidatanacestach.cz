import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/norsko2017/D15_Bergen.jpg";
import img2Src from "../../../images/norsko2017/D15_baracky.jpg";
import Smile from "../../icons/Smile";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Bergen z vyhlídky Fløyen");
const img2 = buildLightboxImage(img2Src, "Baráčky");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Bergen" date="Úterý 19. 9. 2017"/>
        <p>Ráno jsme vstali a ostatní byli už pryč, takže jsme měli aspoň klid na uvaření snídaně. Měli jsme v plánu
            vyšlápnout si na Fløyen, zastávku lanovky nad městem, odkud se dají podnikat další výlety. Bohužel
            pršelo, ale ze začátku se šlo skoro pořád lesem, tak to tolik nevadilo. Dost jsem teda funila, protože jsem
            pro plný nos nemohla moc dýchat. Sotva jsem se plazila a vrchol byl, když nás málem předešla nějaká těhotná
            ženská. <Smile/> Nahoře stejně nebylo nic moc vidět, ale šli jsme se aspoň podívat po lese kolem, bylo tu takové
            jezírko se sezením, kde jsme si dali sváču.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Cestou zpět do města nás čekal sešup lesem a potom i mezi baráčky a jak jsme se blížili centru, čím dál blíž
            jsme slyšeli rachot ze závodů. Byli jsme docela zmrzlí, takže jsme zapadli do malinké kavárny Det Lille
            Kaffekompaniet, kterou jsme našli na Foursquare. Sedli jsme si na barové stoličky přímo do okna, dali jsme
            si dortíky, chia latté a čajík a zevlili jsme. Celkem nás to stálo zas asi 800 Kč, ale s tím se tu holt musí
            počítat. Potom jsme šli do jednoho nákupáku, kde jsme chtěli očíhnout, jestli tu nemají nějaké pěkné
            Kari Traa věcičky, ale nic moc tu nebylo. V infocentru jsme ještě vyzjistili, jak se dostaneme další den
            ráno na letiště a naposledy si prošli Bryggen.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox}/>
        <p>Večer jsme si uvařili těstoviny přímo na ubytku, abychom neutráceli. Po jídle jsme se ještě jednou
            vypravili do města omrknout jednu pevnost a potom jsme už jen balili a chystali věci na ranní odjezd.</p>
    </div>)
}, [img1, img2])
