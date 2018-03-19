const getArticleList = () => {
    return [
        {
            link: "nepal", title: "Nepál", details: [
                {link: "prehled", title: "Přehled"},
                {link: "prijezd", title: "Příjezd"},
            ]
        },
        {
            link: "chorvatsko", title: "Chorvatsko", details: [
                {link: "prehled", title: "Přehled"},
                {link: "prijezd", title: "Příjezd"},
            ]
        },
    ]
};

const getArticleOverview = (id) => {
    const overviews = {
        nepal: {title: "Nepál", link: "nepal", text: "Some text"},
        chorvatsko: {title: "Chorvatsko", link: "chorvatsko", text: "Some text chorvatsko"},
    };

    return overviews[id];
};

const getArticleDetail = (id, detailId) => {
    return {id: id, detailId: detailId, title: "Nepál", link: "nepal", text: "Some text"};
};

export {getArticleList, getArticleOverview, getArticleDetail};