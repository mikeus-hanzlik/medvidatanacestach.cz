import React, { useMemo } from "react";
import withLightbox from "../infrastructure/withLightbox";
import { buildLightboxImage } from "../helpers/imageHelper";
import imgSrc from "../../images/My3.jpg";
import Smile from "../icons/Smile";

const img = buildLightboxImage(imgSrc, "My 3");

const RELATIONSHIP_BEGINNING = new Date("2016-10-01");

const AboutUs = ({ openLightbox }) => {
    const relationshipDuration = useMemo(() => {
        const durationDifMs = Date.now() - RELATIONSHIP_BEGINNING;
        return Math.abs(new Date(durationDifMs).getUTCFullYear() - 1970);
    }, []);

    const durationText = relationshipDuration < 5 ? "roky" : "let";

    return (
        <article className="aboutUsContent">
            <header>
                <h1>O nás</h1>
            </header>
            <section>
                <p>
                    Ahoj! Ať už omylem, nebo cíleně, zavítali jste na náš skromný cestovatelský blog. 
                    Pokud nás neznáte, jmenujeme se Šárka a Michal, jsme obyčejný manželský pár ze 
                    západních Čech, který žije v Praze a pracuje v korporacích. Sezení v kanceláři se 
                    snažíme kompenzovat výlety do přírody. Nejradši jezdíme na vandry a na hory, nebo 
                    aspoň kamkoliv do lesa. Čím míň lidí potkáme, tím líp. <Smile /> A proč Medvíďata? 
                    Kdo zná Michala, ten ví, no a já jsem to tak nějak podědila.
                </p>
                <p>
                    Za {relationshipDuration} {durationText}, co jsme spolu, jsme toho stihli už celkem dost. 
                    Na našich cestách se snažíme psát si (nebo i nahrávat) cestovatelský deník, jednak kvůli 
                    vzpomínkám, a také je to fajn zábava při dlouhých večerech pod stanem nebo někde v divočině. 
                    To, co čtete, jsem ve většině sepsala já, a to, že to číst můžete, je ve většině zásluha 
                    Michala, i když díky jeho výuce jsem i já svou troškou přispěla do programátorského mlýna. <Smile />
                </p>
                <p>
                    Začátkem prosince roku 2019 se nám převrátil život vzhůru nohama. Narodila se nám Nikolka 
                    a své plány jsme chtě nechtě museli trochu přizpůsobit. I tak se snažíme podnikat výlety 
                    s kočárem, vozíkem nebo nosítkem a už teď se těšíme, až bude to naše malé medvídě běhat 
                    po horách s námi.
                </p>
                <p>Snad se vám bude naše vyprávění líbit!</p>
            </section>
            <figure className="profile-image">
                <img 
                    src={img.src} 
                    alt={img.caption} 
                    onClick={() => openLightbox(0)} 
                    tabIndex={0}
                    role="button"
                    aria-label="Zobrazit obrázek v galerii"                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openLightbox(0);
                        }
                    }}
                    style={{ cursor: 'pointer' }}
                />
                <figcaption>{img.caption}</figcaption>
            </figure>
        </article>
    );
};

export default withLightbox(AboutUs, [img]);