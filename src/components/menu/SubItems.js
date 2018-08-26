import React from 'react';
import {NavLink} from "react-router-dom";

export default ({link, details}) => {
    return (
        <div className="dropdown-menu">
            {details.map(detail => (
                <NavLink key={detail.link} to={`/${link}/${detail.link}`}
                         className="dropdown-item">{detail.title}</NavLink>
            ))}
        </div>)
}