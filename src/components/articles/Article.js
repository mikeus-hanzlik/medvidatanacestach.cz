import React from "react";
import {Switch, Route} from "react-router-dom";
import Overview from "./Overview";
import Detail from "./Detail";

export default ({link}) => {
    return <Switch>
        <Route exact path={`/${link}`} render={(props) => (
            <Overview articleId={link} {...props} />
        )}/>
        <Route path={`/${link}/:detailId`} render={(props) => (
            <Detail articleId={link} {...props} />
        )}/>
    </Switch>
}