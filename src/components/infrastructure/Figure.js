import React from "react";

export default ({children, caption}) => {
    return (<figure>
        {children}
        <figcaption>{caption}</figcaption>
    </figure>)
}