const getArticleList = () => {
    return [
        {id: 1, title: "Nepál", link: "nepal"},
        {id: 2, title: "Chorvatsko", link: "chorvatsko"},
    ]
};

const getArticleOverview = (id) => {
    return {id: id, title: "Nepál", link: "nepal", text: "Some text"};
};

const getArticleDetail = (id, detailId) => {
    return {id: id, detailId: detailId, title: "Nepál", link: "nepal", text: "Some text"};
};

export {getArticleList, getArticleOverview, getArticleDetail};