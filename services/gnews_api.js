import Categoria from "./categoria";

const gNewsAPI = async (chaves) => {
    const res = await fetch(
        `https://gnews.io/api/v4/search?q=technology%20artificial%20intelligence%20programming%20cybersecurity%20software%20hardware%20Operating%20System%20Sistema%20Operativo%20ia&lang=pt&max=18&apikey=${chaves.chaveGnews}`
    );

    const data = await res.json();

    if (!data.articles) throw new Error("GNews vazio");

    return data.articles.map(article => ({
        title: article.title,
        description: article.description,
        image: article.image,
        url: article.url,
        category: Categoria(article.title + article.description)
    }));
};


export default gNewsAPI;