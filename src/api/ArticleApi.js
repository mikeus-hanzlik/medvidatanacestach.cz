function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export const getArticleList = () => {
    return [
        {
            link: "slovinsko17",
            title: "Slovinsko '17",
            details: range(5, 1).map(i => ({link: `den${i}`, title: `Den ${i}.`}))
        },
        {
            link: "nepal",
            title: "Nepál '18",
            details: range(15, 1).map(i => ({link: `den${i}`, title: `Den ${i}.`}))
        },
        {
            link: "slovinsko",
            title: "Slovinsko '18",
            details: range(8, 1).map(i => ({link: `den${i}`, title: `Den ${i}.`}))
        },
    ]
};

export const getArticleDetailLinks = (id) => {
    return getArticleList().filter(({link}) => link === id)[0].details;
};

export const getNextArticleDetail = (articleId, detailId) => {
    const detailList = getArticleDetailLinks(articleId);
    const index = detailList.findIndex(x => x.link === detailId);
    return detailList[index + 1];
};
