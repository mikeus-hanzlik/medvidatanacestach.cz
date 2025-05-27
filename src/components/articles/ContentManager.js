import React, { Suspense, useMemo } from "react";
import asyncComponent from "../infrastructure/asyncComponent";

const ContentManager = ({ articleId, params }) => {
    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const overviewPageName = "index";
    const detailId = params.detailId || overviewPageName;

    // Create a new component instance for each detailId to force re-rendering
    const AsyncArticle = useMemo(() => {
        try {
            return asyncComponent(() => import(`../content/${articleId}/${capitalizeFirstLetter(detailId)}.js`));
        } catch (error) {
            console.error(`Failed to load component for ${articleId}/${detailId}:`, error);
            return null;
        }
    }, [articleId, detailId]);

    if (!AsyncArticle) {
        return (
            <div className="error-message" role="alert">
                <p>Omlouváme se, ale tento článek se nepodařilo načíst.</p>
            </div>
        );
    }

    // Use the detailId as a key to force component remounting when it changes
    return (
        <Suspense 
            fallback={
                <div className="loading-spinner" aria-live="polite">
                    <p>Načítání článku...</p>
                </div>
            } 
            key={`${articleId}-${detailId}`}
        >
            <AsyncArticle />
        </Suspense>
    );
};

export default ContentManager;
