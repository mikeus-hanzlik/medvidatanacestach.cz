import React from 'react';
import {NavLink} from "react-router-dom";
import {getArticleDetailLinks} from "../../api/ArticleApi";

export default ({link}) => {
    const details = getArticleDetailLinks(link);

    return (
        <div className="chapters">
            <NavLink to={`/${link}`} exact className="chapter-item">Úvod</NavLink>
            {details.map(detail => (
                <NavLink key={detail.link} to={`/${link}/${detail.link}`}
                         className="chapter-item">{detail.title}</NavLink>
            ))}
        </div>)
}