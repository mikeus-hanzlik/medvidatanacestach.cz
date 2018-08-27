import React from "react";
import {Route} from "react-router-dom";
import SubItems from "./SubItems";

export default ({id}) => {
    return (<Route path={`/${id}`} render={() => (
            <SubItems link={id}/>)
        }/>)
}