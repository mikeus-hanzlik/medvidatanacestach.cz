export const getArticleList = () => {
    return [
        {
            link: "nepal", title: "Nepál", details: [
                {link: "prehled", title: "Přehled"},
                {link: "prijezd", title: "Příjezd"},
            ]
        },
        {
            link: "slovinsko", title: "Slovinsko", details: [
                {link: "prehled", title: "Přehled"},
                {link: "prijezd", title: "Příjezd"},
            ]
        },
    ]
};

export const getArticleDetailLinks = (id) => {
    return getArticleList().filter(({link}) => link === id)[0].details;
};