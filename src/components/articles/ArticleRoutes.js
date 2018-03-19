import {Route} from "react-router-dom";
import React from "react";
import Overview from "./Overview";
import Detail from "./Detail";

export default ({id, link}) => {
    return (
        <div>
            <Route exact path={`/${link}`} render={(props) => (
                <Overview articleId={id} {...props} />
            )}/>
            <Route path={`/${link}/:detailId`} render={(props) => (
                <Detail articleId={id} {...props} />
            )}/>
        </div>
    )
}