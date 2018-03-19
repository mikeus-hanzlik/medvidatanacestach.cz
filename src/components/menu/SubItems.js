import React from 'react';
import {NavLink} from "react-router-dom";

export default ({link, details}) => {
    return (
        <ul className="Menu-Details">
        {details.map(detail => (
            <li key={detail.link}>
                <NavLink to={`/${link}/${detail.link}`}>{detail.title}</NavLink>
            </li>
        ))}
    </ul>)
}