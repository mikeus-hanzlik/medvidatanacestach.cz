import React from "react";
import asyncComponent from "../infrastructure/asyncComponent";

const ContentManager = ({ articleId, params }) => {
    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

    const overviewPageName = "index";
    const detailId = params.detailId || overviewPageName;

    const AsyncArticle = asyncComponent(() => import(`../content/${articleId}/${capitalizeFirstLetter(detailId)}`));

    return <AsyncArticle />
};

export default ContentManager;
