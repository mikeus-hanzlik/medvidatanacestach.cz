import React from "react";

export default ({articleId, match}) => {
    return <p>Detail articleId:{articleId} detailId:{match.params.detailId}</p>
}