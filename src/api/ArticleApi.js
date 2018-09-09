export const getArticleList = () => {
    return [
        // {
        //     link: "nepal",
        //     title: "Nepál",
        //     details: [
        //         {
        //             link: "prehled",
        //             title: "Přehled"
        //         },
        //         {
        //             link: "prijezd",
        //             title: "Příjezd"
        //         },
        //     ]
        // },
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