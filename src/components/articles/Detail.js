import React from "react";
import Chapters from "../menu/Chapters";
import ContentManager from "./ContentManager";

export default ({articleId, title, match}) => {
    return (<div>
        <Chapters id={articleId} />
        <section className="articleText">
            <h2>{title}</h2>
            <ContentManager articleId={articleId} match={match} />
        </section>
    </div>)
}