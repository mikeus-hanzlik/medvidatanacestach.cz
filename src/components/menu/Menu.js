import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {getArticleList} from "../../api/ArticleApi";
import "./Menu.css";
import NewArticleTag from "./NewArticleTag";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {menuExpanded: false};
    }

    toggleMenu = () => {
        this.setState({menuExpanded: !this.state.menuExpanded});
    };

    render() {
        return (
            <nav className="navbar">
                <button className="navbar-toggler"
                        type="button"
                        aria-controls="menuContent"
                        aria-expanded={this.state.menuExpanded}
                        aria-label="Toggle navigation"
                        onClick={this.toggleMenu}>
                    <span className="hamburgerIcon">
                        <div className="hamburgerMenuRow"/>
                        <div className="hamburgerMenuRow"/>
                        <div className="hamburgerMenuRow"/>
                    </span>
                </button>

                <div id="menuContent"
                     className={this.state.menuExpanded ? "expanded" : ""}
                     aria-hidden={!this.state.menuExpanded}>

                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={this.toggleMenu}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <ul className="Menu-Articles">
                        <li className="nav-item">
                            <NavLink to='/' exact className="nav-link">O nás</NavLink>
                        </li>
                        {getArticleList().map(a => (
                                <li className="nav-item" key={a.link}>
                                    <NavLink to={`/${a.link}`} className="nav-link">{a.title}</NavLink>
                                    <NewArticleTag isNewArticle={a.newArticle}/>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
