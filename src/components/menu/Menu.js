import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {getArticleList} from "../../api/ArticleApi";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: 1};
    }


    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to='/'>O nás</NavLink></li>
                    {getArticleList().map(a => (
                            <li key={a.id}><NavLink to={`/${a.link}`}>{a.title}</NavLink></li>
                        )
                    )}
                </ul>
            </nav>
        );
    }
}

export default Menu;
