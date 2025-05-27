import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { getArticleList } from "../../api/ArticleApi";
import "./Menu.css";
import NewArticleTag from "./NewArticleTag";

const Menu = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
    };

    return (
        <nav className="navbar">
            <button className="navbar-toggler"
                    type="button"
                    aria-controls="menuContent"
                    aria-expanded={menuExpanded}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}>
                <span className="hamburgerIcon">
                    <div className="hamburgerMenuRow"/>
                    <div className="hamburgerMenuRow"/>
                    <div className="hamburgerMenuRow"/>
                </span>
            </button>

            <div id="menuContent"
                 className={menuExpanded ? "expanded" : ""}
                 aria-hidden={!menuExpanded}>

                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={toggleMenu}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <ul className="Menu-Articles">
                    <li className="nav-item">
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            O nás
                        </NavLink>
                    </li>
                    {getArticleList().map(a => (
                            <li className="nav-item" key={a.link}>
                                <NavLink 
                                    to={`/${a.link}`} 
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    onClick={toggleMenu}
                                >
                                    {a.title}
                                </NavLink>
                                <NewArticleTag isNewArticle={a.newArticle}/>
                            </li>
                        )
                    )}
                    <li className="nav-item wedding">
                        <a href="https://chicvintagebrides.com/fairytale-winter-wedding-slavkov-forest/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="nav-link">Naše svatba</a>
                        <NewArticleTag isNewArticle={true}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
