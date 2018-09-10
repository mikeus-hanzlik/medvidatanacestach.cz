import React from "react";
import NavLink from "react-router-dom/es/NavLink";
import {getNextArticleDetail} from "../../api/ArticleApi";

export default ({articleId, detailId}) => {
    const nextArticleDetail = getNextArticleDetail(articleId, detailId);
    let nextDetail = null;

    if (nextArticleDetail) {
        nextDetail = (<p className="readMore">
            <NavLink to={`/${articleId}/${nextArticleDetail.link}`} className="nav-link">Číst dál</NavLink>
        </p>)
    }

    return nextDetail;
}
