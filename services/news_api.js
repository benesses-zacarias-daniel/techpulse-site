import Categoria from "./categoria";

const newsAPI = async (chaves) => {
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&pageSize=10&apiKey=${chaves.chaveNewsAPI}`
    );

    const data = await res.json();
    console.log("Retorno do NewsAPI");

    console.log(JSON.stringify(data));

    if (!data.articles) { throw new Error("NewsAPI vazio") };

    return data.articles.map(article => ({
        title: article.title,
        description: article.description,
        image: article.urlToImage,
        url: article.url,
        category: Categoria(article.title + article.description)
    }));
};


export default newsAPI;