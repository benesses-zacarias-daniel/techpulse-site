import Categoria from "./categoria";

const newsDataAPI = async (chaves) => {
    const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=${chaves.chaveNewsData}&q=technology`
    );

    const data = await res.json();
    console.log("Retorno do NewsData API");

    console.log(data);

    if (!data || !Array.isArray(data.results)) throw new Error("NewsData vazio");

    return data.results.map(artigo => ({
        title: artigo.title,
        description: artigo.description,
        image: artigo.image_url,
        url: artigo.link,
        category: Categoria(article.title + article.description)
    }));
};

export default newsDataAPI;