import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {getArticleList} from "../../api/ArticleApi";
import "./Menu.css";
import NewArticleTag from "./NewArticleTag";

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <ul className="Menu-Articles nav nav-tabs">
                    <li className="nav-item">
                        <NavLink to='/' exact className="nav-link">O nás</NavLink>
                    </li>
                    {getArticleList().map(a => (
                            <li className="nav-item dropdown" key={a.link}>
                                <NavLink to={`/${a.link}`} className="nav-link">{a.title}</NavLink>
                                <NewArticleTag isNewArticle={a.newArticle}/>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        );
    }
}

export default Menu;
