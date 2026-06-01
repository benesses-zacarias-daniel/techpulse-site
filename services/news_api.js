import { bloquear, temImagem } from "../utils/filtros";
import NormalizarNoticial from "../utils/normalizar_noticia";

const newsAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&pageSize=18&language=pt&apiKey=${chaves.chaveNewsAPI}`);

    const resposta = await requisicao.json();
    console.log("Retorno do NewsAPI");

    if (!resposta.articles) { throw new Error("NewsAPI vazio") };

    const dadosFinais = resposta.articles.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo)).filter(artigo => bloquear(artigo));

    return dadosFinais;
};


export default newsAPI;