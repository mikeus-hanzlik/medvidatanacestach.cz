import React from "react";
import { useParams } from "react-router-dom";
import Chapters from "../menu/Chapters";
import ContentManager from "./ContentManager";
import NextArticle from "./NextArticle";

const Detail = ({ articleId, title }) => {
    const params = useParams();
    
    return (
        <div>
            <Chapters id={articleId} />
            <section className="articleText">
                <ContentManager articleId={articleId} params={params} />
            </section>
            <NextArticle articleId={articleId} detailId={params.detailId} />
        </div>
    );
};

export default Detail;