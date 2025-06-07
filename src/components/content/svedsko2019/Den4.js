import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/MisaBrusli.jpg";
import img2src from "../../../images/svedsko2019/Skate.jpg";
import img3src from "../../../images/svedsko2019/Desitka.jpg";
import img4src from "../../../images/svedsko2019/OkoloDesitky.jpg";



import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Míša bruslí");
const img2 = buildLightboxImage(img2src, "Stopa vyjetá skútry");
const img3 = buildLightboxImage(img3src, "Nikde nikdo");
const img4 = buildLightboxImage(img4src, "Jen sníh a les");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Noční projížďka" date="Čtvrtek 14. 2." />
        <p>Ráno je zas krásně. Tentokrát necháváme klasičky doma a vyrážíme na skate. S bruslařskými stopami je to tu trochu horší, jedeme chvíli po
            silnici, která je ale sem tam posypaná štěrkem, takže si docela poškrábeme skluznice. Nakonec volíme cesty pro skútr, na kterých jde
            bruslit celkem dobře a je jich tu v okolí hodně.</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Ke konci se rozdělíme - Míša se vrací k chatičce trénovat techniku a já si dám ještě jednu zajížďku na opačnou stranu od silnice. Nepotkám
            ani živáčka a za chvíli se začínám trochu bát, přece jen jsem sama uprostřed lesa a navíc strašidla přes křupání sněhu od lyží a hůlek
            nemůžu slyšet. Párkrát se trochu paranoidně otočím za sebe a radši nasadím vrcholové tempo a vracím se brzy domů.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Odpoledne Míša zůstává doma. Mně to ale nedá a vyrážím si objet ještě klasickou desítku, kterou paní domácí tentokrát najela. Beru to hopem
            a pěkně se zpotím - ani ne proto, že bych si chtěla tolik máknout, ale spíš mi opět malinko hrabe z toho, že kolem nikde nikdo a nic není.
            Nebo je?</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3} />
        <p>Po mém návratu jedeme znovu dokoupit zásoby do vesničky. Večer je stále jasno a krásně svítí měsíc, takže aby toho nebylo málo, rozhodneme
            se ještě dotřetice vytáhnout běžky na noční projížďku. A je to nádhera! Ani nepotřebujeme rozsvěcovat čelovky, protože měsíc svítí o sto
            šest. Když mám Míšu (medvěda) za zadkem, ani se nebojím. <Smile/> Objedeme si pětku a šup domů ke krbu.</p>
        <p>Večery si tu vyloženě užíváme. Není tu žádný hluk, televize ani signál, takže si lebedíme u krbu, povídáme a popíjíme čajíky, vínečko nebo
            rum. Potom vždy padnem za vlast - po dni na čerstvém mrazivém vzduchu spíme jako miminka. (Vsuvka 27.3.2020: Jedno miminko už máme a teda
            nevím, kdo tohle přirovnání vymyslel.)</p>
        <p>Joo a dneska byl Valentýn! Ten neslavíme. <Smile/></p>
    </div>)
}, [img1, img2, img3, img4])
