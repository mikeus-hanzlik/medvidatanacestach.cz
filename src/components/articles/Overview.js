import React from "react";
import {getArticleOverview} from "../../api/ArticleApi";

export default ({articleId}) => {
    const overview = getArticleOverview(articleId);
    return (
        <section>
            <h2>{overview.title}</h2>
            <p>{overview.text}</p>
        </section>
    )
}