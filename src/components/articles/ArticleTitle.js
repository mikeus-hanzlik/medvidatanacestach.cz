import React from "react";

export default ({title, date}) => {
    return (<div className="articleTitle">
        <h1>{title}</h1>
        <h2>{date}</h2>
    </div>)
}