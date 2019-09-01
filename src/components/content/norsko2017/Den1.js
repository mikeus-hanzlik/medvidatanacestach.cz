import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import ArticleTitle from "../../articles/ArticleTitle";
import Image from "../../articles/Image";
import {buildLightboxImage} from "../../helpers/imageHelper";
import img1src from "../../../images/norsko2017/D1_Stavanger.jpg";

const img1 = buildLightboxImage(img1src, "D1_Stavanger");

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Přílet do Stavangeru" date="Úterý 5. 9. 2017"/>
        <p>Odlétat jsme měli 5. září. Večer před odletem, kdy jsme teprve začínali balit, ale Míša lehl. Nejdřív jsem mu
            chtěla nadávat, že to má z těch svých Gladiator-Predátorů, když se ještě týden před odletem v rámci závodu
            cachtal v ledové vodě. Ale ukázalo se, že se jedná o střevní potíže. Hmm, nic moc, ale to určitě do pár dnů
            přejde. Ráno to bohužel nebylo o moc lepší, tak jsme museli do lékárny, aby se Míša nadopoval a bez úhony
            zvládl let. To se naštěstí povedlo a my přistáli ve Stavangeru.</p>
        <p>Podle předpovědi mělo být 20°C a sluníčko. Realita byla trochu jiná: Mlha, zima, déšť. V půjčovně jsme si
            vyzvedli auto, místo objednaného VW Pola jsme vyfásli nějakou hybridní Toyotu, která byla o dost větší,
            super, aspoň bude dost místa na naše krámy. Asi po deseti minutách jízdy směr centrum Stavangeru jsem navíc
            zjistila, že má automatickou převodovku. No, kdybych řídila, přijdu na to snad dřív.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox}/>
        <p>Stavanger jsme v dešti prošli celkem rychle, vyfotili pozici polovičního trojúhelníku pro yoga challenge,
            které jsem se účastnila, ve sportu koupili plynovou bombu na vařič a krásné růžové Kari Traa ponožky a
            zapadli do kavárny. To brzy. V původním plánu bylo dojet k Preikestolenu, vyrazit na hike a přespat cestou
            pod stanem. Vzhledem k dešti a Míšovo střevním potížím jsme se ale rozhodli ubytovat první noc přes
            airbnb.</p>
        <p>Martin, Nor jako poleno (tzn. blond model s nagelovanou vlnou na čele), nás přivítal ve své luxusní designové
            vile nad městečkem Ålgård kus od Stavangeru. K večeři jsme si dali suchou rýži s tuňákem, pustili si film a šli spát.</p>
    </div>)
}, [img1])
