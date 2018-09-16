import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/nepal/udoliPredPisangem.jpg";
import img2Src from "../../../images/nepal/upperPisang.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Údolí před Upper Pisangem");
const img2 = buildLightboxImage(img2Src, "Výhled z terasy guest housu");

export default withLightbox(({openLightbox}) => {
    return (
        <div>
            <ArticleTitle title="Chame – Upper Pisang" date="Sobota 5. 5."/>
            <p>Dnes přichází trochu krize. Šárinka nemůže spát, protože ji děsně bolí v krku a celý další den se jí
                špatně ťape. Ještě před odchodem z Chame nakupujeme další Strepsils a sprej do nosu a vydáváme se na
                cestu šněčím tempem. Z Chame směrem dál do Manangu staví kameny dlážděnou silnici, ale naštěstí tu dnes
                není žádný provoz, protože je sobota. Další zastávkou je Bratang, kde mají jablečné sady a taky
                ciderovnu. Cider ale bohužel nemají, tak si dáme aspoň čaj. Po chvíli odbočujeme ze „silnice“ na stezku
                vedoucí jehličnatým lesem, která nás zavede až do vesnice Dhukur Pokhari. Je krásně, kolem nás se tyčí
                obrovské stěny a my si sedáme na střešní terasu místního guest housu na oběd. Dáme si egg kari a onion
                garlic soup na vyhnání bacilů a taky prevenci výškové nemoci, přece jen už jsme přes 3200 mnm.</p>
            <p>Část cesty, která následuje, je jeden z nejkrásnějších úseků na Annapurna circuit treku vůbec. Jdeme po
                pláni s borovicemi, kolem nás jsou obrovské hory a opodál údolím teče řeka s krásně čistou vodou. Tady
                také poprvé spatříme Annapurnu II, která má bez pár desítek metrů 8000 do výšky.</p>
            <Image lightboxImage={img1} openLightbox={openLightbox}/>
            <p>Do Upper Pisangu, kde je cíl naší dnešní cesty, nás čeká ještě pořádný stoupák. Vlivem nadmořské výšky už
                docela funíme. I celá vesnička je v prudkém kopci a my se ubytujeme až nahoře, abychom další den
                nemuseli krpálem hned začínat.</p>
            <Image lightboxImage={img2} openLightbox={openLightbox}/>
            <p>Před večeří si vyšlápneme ke krásnému Buddhistickému chrámu (tzv. stupa), dovnitř se smí jen bez bot.
                Později zjišťujeme, že v oblasti Manangu mají už asi týden výpadek elektřiny, tím pádem nemáme světlo,
                ani wifinu. Není tu ani sprcha, tak si objednáváme aspoň kýbl horké vody, kterou nám na ohni ohřívají
                neskutečně dlouho, a v kobce na mytí alias koupelně se navzájem poléváme. Venku pěkně fičí a je už dost
                zima. Večer prosíme, aby nám v dining hallu zatopili, ale i tak musíme sedět téměř ve všech vrstvách,
                které s sebou máme. Sepisujeme deník a popíjíme čaj.</p>
            <p>V noci se moc nevyspíme, jednak se nám hůř dýchá a taky nám ve věcech šmejdí myši. Šárinka má do toho
                plný nos a kašle, do vysokých nadmořských výšek ideální kombinace.</p>
        </div>)
}, [img1, img2])