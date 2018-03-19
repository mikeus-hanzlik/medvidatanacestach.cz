import React from "react";
import {Switch} from "react-router-dom";
import {getArticleList} from "../../api/ArticleApi";
import ArticleRoutes from "./ArticleRoutes";

export default () => {
    return <Switch>
        {getArticleList().map(article => (
            <ArticleRoutes key={article.id} {...article}/>
            )
        )}
    </Switch>
}