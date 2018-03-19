import AboutUs from "./about/AboutUs";
import Article from "./articles/Article";
import {Route, Switch} from "react-router-dom";
import React from "react";

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={AboutUs}/>
            <Route path='/nepal' component={Article}/>
            <Route path='/chorvatsko' component={Article}/>
        </Switch>
    )
}