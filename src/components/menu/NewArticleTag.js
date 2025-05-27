import React from "react";

const NewArticleTag = ({isNewArticle}) => {
    if (isNewArticle) {
        return <div className="newArticleTag" aria-label="New article indicator">New</div>;
    }
    return null;
}

export default NewArticleTag;