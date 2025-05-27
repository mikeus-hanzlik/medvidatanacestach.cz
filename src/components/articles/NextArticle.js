import React from "react";
import { NavLink } from "react-router-dom";
import { getNextArticleDetail } from "../../api/ArticleApi";

const NextArticle = ({ articleId, detailId }) => {
    if (!articleId || !detailId) {
        return null;
    }

    try {
        const nextArticleDetail = getNextArticleDetail(articleId, detailId);
        
        if (!nextArticleDetail) {
            return null;
        }

        return (
            <nav className="article-navigation" aria-label="Následující článek">
                <p className="readMore">
                    <NavLink 
                        to={`/${articleId}/${nextArticleDetail.link}`} 
                        className="nav-link"
                        aria-label={`Pokračovat na ${nextArticleDetail.title}`}
                    >
                        Číst dál
                    </NavLink>
                </p>
            </nav>
        );
    } catch (error) {
        console.error('Error in NextArticle component:', error);
        return null;
    }
};

export default NextArticle;
