import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import {getArticleList} from "../../api/ArticleApi";
import "./Menu.css";
import SubItems from "./SubItems";

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <ul className="Menu-Articles">
                    <li><NavLink to='/'>O nás</NavLink></li>
                    {getArticleList().map(a => (
                            <li key={a.link}>
                                <NavLink to={`/${a.link}`}>{a.title}</NavLink>
                                <Route path={`/${a.link}`} render={(props) => (
                                    <SubItems {...a} {...props} />)
                                }/>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        );
    }
}

export default Menu;
