const newsDataAPI = async (chaves) => {
    const res = await fetch(
        `https://newsdata.io/api/1/news?apikey=${chaves.newsDataAPI}&q=technology`
    );

    const data = await res.json();

    if (!data.results) throw new Error("NewsData vazio");

    return data.results.map(artigo => ({
        title: artigo.title,
        description: artigo.description,
        image: artigo.image_url,
        url: artigo.link,
        category: Categoria(article.title + article.description)
    }));
};

export default newsDataAPI;