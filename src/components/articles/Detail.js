import React from "react";
import Chapters from "../menu/Chapters";
import ContentManager from "./ContentManager";
import NextArticle from "./NextArticle";

export default ({articleId, title, match}) => {
    return (<div>
        <Chapters id={articleId} />
        <section className="articleText">
            <ContentManager articleId={articleId} match={match} />
        </section>
        <NextArticle articleId={articleId} detailId={match.params.detailId} />
    </div>)
}