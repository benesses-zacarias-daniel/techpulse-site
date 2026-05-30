import { NormalizarNoticial } from "../utils/normalizar_noticia";

const newsAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&pageSize=18&language=pt&apiKey=${chaves.chaveNewsAPI}`);

    const resposta = await requisicao.json();
    console.log("Retorno do NewsAPI");

    if (!resposta.articles) { throw new Error("NewsAPI vazio") };

    return resposta.articles.slice(0, 18).map(artigo => NormalizarNoticial(artigo));
};


export default newsAPI;