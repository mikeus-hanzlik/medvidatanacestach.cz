import React from "react";

export default ({isNewArticle}) => {
    if (isNewArticle) {
        return <div className="newArticleTag">New</div>
    }

    return null;
}