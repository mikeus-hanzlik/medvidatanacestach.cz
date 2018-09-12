export const getArticleList = () => {
    return [
        {
            link: "nepal",
            title: "Nepál",
            details: [
                {
                    link: "den1",
                    title: "Den 1."
                },
                {
                    link: "den2",
                    title: "Den 2."
                },
                {
                    link: "den3",
                    title: "Den 3."
                },
                {
                    link: "den4",
                    title: "Den 4."
                },
                {
                    link: "den5",
                    title: "Den 5."
                },
                {
                    link: "den6",
                    title: "Den 6."
                },
                {
                    link: "den7",
                    title: "Den 7."
                },
                {
                    link: "den8",
                    title: "Den 8."
                },
                {
                    link: "den9",
                    title: "Den 9."
                },
                {
                    link: "den10",
                    title: "Den 10."
                },
                {
                    link: "den11",
                    title: "Den 11."
                },
                {
                    link: "den12",
                    title: "Den 12."
                },
                {
                    link: "den13",
                    title: "Den 13."
                },
                {
                    link: "den14",
                    title: "Den 14."
                },
                {
                    link: "den15",
                    title: "Den 15."
                },
            ]
        },
        {
            link: "slovinsko",
            title: "Slovinsko",
            details: [
                {
                    link: "den1",
                    title: "Den 1."
                },
                {
                    link: "den2",
                    title: "Den 2."
                },
                {
                    link: "den3",
                    title: "Den 3."
                },
                {
                    link: "den4",
                    title: "Den 4."
                },
                {
                    link: "den5",
                    title: "Den 5."
                },
                {
                    link: "den6",
                    title: "Den 6."
                },
                {
                    link: "den7",
                    title: "Den 7."
                },
                {
                    link: "den8",
                    title: "Den 8."
                },
            ]
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