import React from "react";

const ArticleTitle = ({title, date}) => {
    return (<div className="articleTitle">
        <h1>{title}</h1>
        <h2>{date}</h2>
    </div>)
}

export default ArticleTitle;