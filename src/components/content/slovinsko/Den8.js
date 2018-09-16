import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import img1Src from "../../../images/slovinsko/Prisank.jpg";
import Image from "../../articles/Image";
import ArticleTitle from "../../articles/ArticleTitle";

const img1 = buildLightboxImage(img1Src, "Prisank" );

export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Prisank" date="Sobota 7. 7."/>
        <p>Vstáváme už po sedmé, snídáme vaječnou omeletu a čeká nás náročný výstup na Prisojnik / Prisank, který má přes 2500 mnm. Děsně fučí, že to Šárinku málem odnáší, ale během dne se to naštěstí uklidňuje. Čekají nás nádherné výhledy od rána až do večera. Není to žádná pohodová procházka, zdoláváme dost železných úseků, potkáváme Čechy, kteří to raději otáčejí, ale nakonec se na vrchol vyškrábeme. A rozhodně to stojí za to! Vidíme na Krajnskou Goru, Triglav, i na Jalovec. Nahoře jsou ochočení ptáci, Míšovi doslova zobou z ruky. Pecka!</p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Dolů jdeme jinou cestou, takovou, která je podle slovinského průvodce dávačka. No, i tak se dost zapotíme, chvilkama opět lezeme a scházíme přes prudké sněhové pole, kde se málem rozsekáme. Když se kolem třetí vrátíme zpět k chatě, docela se nám uleví. Dáme si oběd a jdeme k Obludě. Dnes už máme v plánu jen koupel v jezeře Jasna u Krajsne Gory, nákup alkoholu a cestu zpět do Prahy. Chceme se vyhnout nedělním zácpám, proto vyrážíme už dnes.</p>
        <p>Jasna je tedy pěkná ledárna, což se dalo trochu tušit, když se nekoupal ani živáček a všichni jen posedávali okolo. My ale nejsme žádná béčka, dáváme i pár temp a s příjemným pocitem smytého potu a špíny se vracíme k Obludě. Do Prahy se vracíme po sedmi hodinách cesty, vyřízení, s bohatými zásobami slovinského vína a našeho oblíbeného Borovničevce. A taky s jedním krásným prstýnkem navíc. ☺</p>
    </div>)
}, [img1])
