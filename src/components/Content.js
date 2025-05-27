import AboutUs from "./about/AboutUs";
import Article from "./articles/Article";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { getArticleList } from "../api/ArticleApi";
import "./Content.css"

const Content = () => {
    return (
        <div className="Content">
            <Routes>
                <Route path='/' element={<AboutUs />} />
                {getArticleList().map(a => (
                    <Route key={a.link} path={`/${a.link}/*`} element={<Article {...a} />} />
                ))}
            </Routes>
        </div>
    )
}

export default Content;