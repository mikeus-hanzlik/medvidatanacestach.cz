import React from 'react';
import { NavLink } from "react-router-dom";
import { getArticleDetailLinks } from "../../api/ArticleApi";

const SubItems = ({ link }) => {
    const details = getArticleDetailLinks(link);

    return (
        <div className="chapters">
            <NavLink 
                to={`/${link}`} 
                end 
                className={({ isActive }) => `chapter-item ${isActive ? 'active' : ''}`}
            >
                Úvod
            </NavLink>
            {details.map(detail => (
                <NavLink 
                    key={detail.link} 
                    to={`/${link}/${detail.link}`}
                    className={({ isActive }) => `chapter-item ${isActive ? 'active' : ''}`}
                >
                    {detail.title}
                </NavLink>
            ))}
        </div>
    );
};

export default SubItems;
