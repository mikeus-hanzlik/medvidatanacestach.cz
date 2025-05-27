import React from "react";
import { NavLink } from "react-router-dom";
import { getNextArticleDetail } from "../../api/ArticleApi";

const NextArticle = ({ articleId, detailId }) => {
    const nextArticleDetail = getNextArticleDetail(articleId, detailId);
    let nextDetail = null;

    if (nextArticleDetail) {
        nextDetail = (
            <p className="readMore">
                <NavLink 
                    to={`/${articleId}/${nextArticleDetail.link}`} 
                    className="nav-link"
                >
                    Číst dál
                </NavLink>
            </p>
        );
    }

    return nextDetail;
};

export default NextArticle;
