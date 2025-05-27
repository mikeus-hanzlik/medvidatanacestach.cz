import React, { Suspense, useMemo } from "react";
import asyncComponent from "../infrastructure/asyncComponent";

const ContentManager = ({ articleId, params }) => {
    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

    const overviewPageName = "index";
    const detailId = params.detailId || overviewPageName;

    // Create a new component instance for each detailId to force re-rendering
    const AsyncArticle = useMemo(() => {
        return asyncComponent(() => import(`../content/${articleId}/${capitalizeFirstLetter(detailId)}.js`));
    }, [articleId, detailId]);

    // Use the detailId as a key to force component remounting when it changes
    return (
        <Suspense fallback={<div>Loading...</div>} key={`${articleId}-${detailId}`}>
            <AsyncArticle />
        </Suspense>
    );
};

export default ContentManager;
