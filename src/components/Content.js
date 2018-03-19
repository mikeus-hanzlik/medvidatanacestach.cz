import AboutUs from "./about/AboutUs";
import Article from "./articles/Article";
import {Route, Switch} from "react-router-dom";
import React from "react";
import {getArticleList} from "../api/ArticleApi";
import "./Content.css"

export default () => {
    return (
        <div className="Content">
            <Switch>
                <Route exact path='/' component={AboutUs}/>
                {getArticleList().map(a => (
                        <Route key={a.link} path={`/${a.link}`} render={(props) => (
                            <Article {...a} {...props} />)
                        }/>
                    )
                )}
            </Switch>
        </div>
    )
}