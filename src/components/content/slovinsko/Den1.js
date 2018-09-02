import React from "react";
import withLightbox from "../../infrastructure/withLightbox";
import {buildLightboxImage} from "../../helpers/imageHelper";
import trasaSrt from "../../../images/slovinsko/SlovinskoTrasa.png";


export default withLightbox(({openLightbox}) => {
    return (<div>
        <h1>Sobota 30. 6. – Vogel ski centrum</h1>
        <p>Náš druhý výlet do slovinských hor začíná už v půl páté ráno zazvoněním budíku. Chceme se vyhnout zácpám, protože je nám jasné, že půlka republiky bude na první červencový týden mířit na jih stejně jako my. </p>
        <p>Vychází nám to a kolem páté vyrážíme směr Budějice a dál. Cesta probíhá hladce až na půlhodinové čekání před tunelem do Slovinska. Ve dvě odpoledne už jsme na místě, a to pod lanovkou Vogel u městečka Ukanc na břehu Bohinjského jezera. </p>
        <figure>
            <img />
            <figcaption></figcaption>
        </figure>
        <p>Dáme rychlou koupel v jezeře, bůhví, kdy se zas budeme mýt. A protože je už celkem pozdě, Šárinku bolí v krku a jsme líní, za 32 éček se lanovkou vyvážíme do 1500 mnm. Ještě ten večer se nám otevírají první výhledy na Triglav. Ubytujeme se v koče Murka a dostaneme luxusní tříchodovou věčeři, kterou ani náhodou nemůžeme sníst. Míša potom usíná a Šárinka kloktá. </p>
    </div>)
}, [])