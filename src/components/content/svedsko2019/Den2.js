import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import Image from '../../articles/Image';
import img1src from "../../../images/svedsko2019/ChajdaPoprve.jpg";
import img2src from "../../../images/svedsko2019/PrvniBezky.jpg";
import img3src from "../../../images/svedsko2019/ChajdaPodruhe.jpg";
import img4src from "../../../images/svedsko2019/ChajdyPoprve.jpg";
import img5src from "../../../images/svedsko2019/ChajdyPodruhe.jpg";
import img6src from "../../../images/svedsko2019/NocniChajda.jpg";

import ArticleTitle from "../../articles/ArticleTitle";
import Smile from "../../icons/Smile";

const img1 = buildLightboxImage(img1src, "Naše chatička Freja");
const img2 = buildLightboxImage(img2src, "První projížka na běžkách");
const img3 = buildLightboxImage(img3src, "Míša s naší chatičkou");
const img4 = buildLightboxImage(img4src, "Chajdy cestou do Myrviken");
const img5 = buildLightboxImage(img5src, "Chajdy cestou do Myrviken");
const img6 = buildLightboxImage(img6src, "Chaloupka v zasněženém lese");


export default withLightbox(({openLightbox}) => {
    return (<div>
        <ArticleTitle title="Chatička Freja" date="Úterý 12. 2." />
        <p>Spíme snad 10 hodin a hned po probuzení natěšeně koukáme z oken. Jsou mraky, ale kolem je to učiněná zimní pohádka! </p>
        <Image lightboxImage={img1} openLightbox={openLightbox} />
        <p>Po snídani se vyrážíme seznámit s paní domácí a hned potom jdeme na běžky. Stopy tu najíždí sama paní skútrem, takže jsou opravdu jen pro
            nás a začínají kousek od našeho domečku. Kromě té naší jsou tu ještě asi další 3 chatičky, 2 prázdné a jedna obsazená nějakými Němci,
            které potkáme jen jednou. Najeta je tu klasika a jen krátké okruhy 2, 4 a 5 km, ale pro začátek nám to stačí. Tratě kombinujeme a nejvíc
            se nám líbí ta nejkratší, která je hodně nahoru dolů a do zatáček. Jinak je to tu spíš rovina. Nepotkáváme nic a nikoho, jen sníh, stromy,
            občas pláň.</p>
        <Image lightboxImage={img2} openLightbox={openLightbox} index={1} />
        <p>Když už toho máme dost, vrátíme se domů na oběd, který uvaříme ještě z přivezených zásob. Odpoledne vyrážíme na nákup do nejbližší vesnice
            s obchodem, Myrviken. Cesta se na mapě zdá být kousek, ale zabere nám 45 min. Jedeme pořád lesem, občas potkáme nějakou tu chajdu, ale
            žádné lidi, sobi, ani losi. Po nákupu se jdeme ještě projít po vesničce, ale zjistíme, že kromě malé pekárny, kde si koupíme mňaminky na
            později, tu nic moc není.</p>
        <Image lightboxImage={img3} openLightbox={openLightbox} index={2} />
        <Image lightboxImage={img4} openLightbox={openLightbox} index={3} />
        <Image lightboxImage={img5} openLightbox={openLightbox} index={4} />
        <p>Doma si k mňaminkám uděláme kafe. Chceme si ho dát i s mlékem, ale zjišťujeme, že jsme místo mléka nakoupili kefír, či co. <Smile /> Večer si
            ještě dáváme první saunu s tím, že místo ledového bazénku skáčeme venku přímo do čerstvého sněhu. Mrzne, je přibližně 5 pod nulou a
            osvěžení je to docela důkladné. Napadaný prašan se na nás přilepí a jen co se z něj vyhrabeme, taje. Mrzneme a vřískáme u toho jako děti!</p>
        <p>Aby toho nebylo málo, v noci se jdeme ještě projít. Protože sněží, ze sledování polární záře nic nebude, ale i tak se nám to líbí. Jdeme s
            čelovkami po cestě, odkud jsme první den přijeli, a u několika dalších opuštěných zasněžených chajdiček odbočujeme doprava. V závějích
            vedle cesty vidíme spoustu stop, některé asi od zajíců a lišek, ale další, o hodně větší, které vedou i přes cestu, jsou určitě od losů.
            Je to trochu napínavé, co když na nás nějaký los z lesa kouká?</p>
        <Image lightboxImage={img6} openLightbox={openLightbox} index={5} />
        <p>V noci se má vyjasnit, takže máme nastaveného budíka asi na 2 hodiny ráno, abychom šli zkontrolovat polární záři. Je to jako v Norsku. Míša
            je línej, a tak musím ven já. Naštěstí oproti Norsku tady není třeba lézt ze spacáku a ze stanu, stačí nazout pohory, obléct bundu a
            popojít kousek od chajdy. Nic ale vidět není, jen mraky a sem tam nějaká hvězda. Hmm, tak příště. Samozřejmě víme, že i kdyby zrovna
            polární záře vidět byla, oči si na tmu musí nejdřív přivyknout, ideální by tedy bylo jít si někam ven lehnout a koukat na oblohu trochu
            dýl. Ovšem, kdyby záře šajnila tak, jako je to na zarámovaných obrázcích v naší chatičce, oslnila by nás jistě i bez přivykání.</p>
    </div>)
}, [img1, img2, img3, img4, img5, img6])
