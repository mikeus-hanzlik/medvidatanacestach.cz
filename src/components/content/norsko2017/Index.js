import React from "react";
import {buildLightboxImage} from "../../helpers/imageHelper";
import withLightbox from "../../infrastructure/withLightbox";
import trasaSrt from "../../../images/norsko2017/Norsko_trasa.PNG";
import Image from "../../articles/Image";
import Smile from "../../icons/Smile";

const trasa = buildLightboxImage(trasaSrt, `Naše cesta Norskem`);

export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Norsko 2017</h1>
        <p>Do Norska jsme se rozhodli letět v září, aby nebylo moc lidí, ale zároveň bylo ještě jakž takž teplo a taky
            už dost tmy pro případné sledování polární záře. Letenky jsme koupili do Stavangeru a zpátky z Bergenu, na 2
            týdny. V plánu bylo půjčit si auto, spát pod stanem a objet hlavně národní parky. To jsme ještě netušili, že
            příplatek za vrácení auta v jiné destinaci nás bude stát o dost víc než samotné letenky. Ale co už. Když se
            člověk chystá na sever, rozhodně nemůže počítat s levnou dovolenou.<Smile/>
        </p>
        <p>Zdravotní komplikace nám bohužel plán cesty nakonec trochu pozměnily. I tak jsme se ale podívali do
            národních parků Hardangervidda, Jotunheimen, Rondane a Jostedalbreen. Najeli jsme hodiny a hodiny v autě,
            neustále žasli nad tím, že kamkoliv nás navigace zavedla, všude kolem byla překrásná příroda a nádherné
            hory. A já se svojí zálibou v barevných baráčcích jsem si taky přišla na své. <Smile/> Kromě toho jsme i zjistili,
            že spolu celkem dokážeme být. Norsko byla totiž naše první delší dovolená jen ve dvou.</p>
        <Image lightboxImage={trasa} openLightbox={openLightbox}>
            <span>(<a href="https://en.mapy.cz/s/larumavono" rel="noopener noreferrer" target="_blank">mapa zde</a>)</span>
        </Image>
    </div>)
}, [trasa])
