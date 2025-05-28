import React from "react";

const ArticleTitle = ({title, date}) => {
    // Safely convert props to string representations
    const safeTitle = typeof title === 'object' && title !== null 
        ? JSON.stringify(title) 
        : String(title || '');
    
    const safeDate = typeof date === 'object' && date !== null 
        ? JSON.stringify(date) 
        : String(date || '');

    return (<div className="articleTitle">
        <h1>{safeTitle}</h1>
        <h2>{safeDate}</h2>
    </div>)
}

export default ArticleTitle;