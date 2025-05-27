import React from "react";

const NewArticleTag = ({isNewArticle}) => {
    if (isNewArticle) {
        return <div className="newArticleTag">New</div>
    }

    return null;
}

export default NewArticleTag;