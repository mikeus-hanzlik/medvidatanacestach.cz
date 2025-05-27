/**
 * Utility function to generate a range of numbers
 * @param {number} size - The size of the range
 * @param {number} startAt - The starting number (default: 0)
 * @returns {number[]} Array of numbers
 */
function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

/**
 * Article data configuration
 * Organized by publication date (newest first)
 */
const ARTICLE_CONFIG = [
    {
        link: "svedsko2019",
        title: "Svatební cesta Švédsko 2019",
        details: range(10, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` })),
        newArticle: true
    },
    {
        link: "norsko2017",
        title: "Norsko 2017",
        details: range(16, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` })),
        newArticle: true
    },
    {
        link: "rakousko18",
        title: "Hohe Tauern 2018",
        details: range(4, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` })),
    },
    {
        link: "slovinsko",
        title: "Slovinsko 2018",
        details: range(8, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` }))
    },
    {
        link: "nepal",
        title: "Nepál 2018",
        details: range(15, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` }))
    },
    {
        link: "slovinsko17",
        title: "Slovinsko 2017",
        details: range(5, 1).map(i => ({ link: `den${i}`, title: `Den ${i}.` })),
    }
];

/**
 * Get the list of all articles
 * @returns {Array} Array of article objects
 */
export const getArticleList = () => {
    return ARTICLE_CONFIG;
};

/**
 * Get article details by article ID
 * @param {string} id - Article identifier
 * @returns {Array|null} Array of article details or null if not found
 */
export const getArticleDetailLinks = (id) => {
    try {
        const article = getArticleList().find(({ link }) => link === id);
        return article ? article.details : null;
    } catch (error) {
        console.error(`Error getting article details for ${id}:`, error);
        return null;
    }
};

/**
 * Get the next article detail in sequence
 * @param {string} articleId - Article identifier
 * @param {string} detailId - Current detail identifier
 * @returns {Object|null} Next article detail or null if not found
 */
export const getNextArticleDetail = (articleId, detailId) => {
    try {
        const detailList = getArticleDetailLinks(articleId);
        if (!detailList) {
            return null;
        }
        
        const index = detailList.findIndex(x => x.link === detailId);
        return index !== -1 && index < detailList.length - 1 ? detailList[index + 1] : null;
    } catch (error) {
        console.error(`Error getting next article detail for ${articleId}/${detailId}:`, error);
        return null;
    }
};
