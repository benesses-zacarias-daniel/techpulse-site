import { bloquear, limitarDescricao, noticiaTech, temImagem } from "../utils/filtros";
import NormalizarNoticial from "../utils/normalizar_noticia";

const newsAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsapi.org/v2/everything?q=technology%20OR%20artificial%20intelligence%20OR%20programming%20OR%20cybersecurity%20OR%20software%20OR%20hardware%20OR%20Operating%20System%20OR%20Sistema%20Operativo%20OR%20ia&pageSize=10&apiKey=${chaves.chaveNewsAPI}&language=pt&sortBy=relevancy&pageSize=20`);
    const resposta = await requisicao.json();
    console.log("Retorno do NewsAPI");
    console.log(resposta);

    if (!resposta.articles) { throw new Error("NewsAPI vazio") };

    const dadosFinais = resposta.articles.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo)).filter(artigo => bloquear(artigo)).filter(artigo => noticiaTech(artigo)).filter(artigo => limitarDescricao(artigo));

    return dadosFinais;
};


export default newsAPI;