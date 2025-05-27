import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Detail from "./Detail";

const Article = ({ link, title }) => {
    return (
        <Routes>
            <Route index element={<Overview articleId={link} title={title} />} />
            <Route path=":detailId" element={<Detail articleId={link} title={title} />} />
        </Routes>
    );
};

export default Article;