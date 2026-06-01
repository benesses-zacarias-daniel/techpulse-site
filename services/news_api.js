import { bloquear, temImagem } from "../utils/filtros";
import NormalizarNoticial from "../utils/normalizar_noticia";

const newsAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsapi.org/v2/top-headlines?q=technology&apiKey=${chaves.chaveNewsAPI}`);

    const resposta = await requisicao.json();
    console.log("Retorno do NewsAPI");
    console.log(resposta);

    if (!resposta.articles) { throw new Error("NewsAPI vazio") };

    const dadosFinais = resposta.articles.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo)).filter(artigo => bloquear(artigo));

    return dadosFinais;
};


export default newsAPI;