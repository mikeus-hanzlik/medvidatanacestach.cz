import React from "react";
import { useLocation } from "react-router-dom";
import SubItems from "./SubItems";

const Chapters = ({ id }) => {
    const location = useLocation();
    const shouldShow = location.pathname.startsWith(`/${id}`);
    
    return shouldShow ? <SubItems link={id} /> : null;
};

export default Chapters;