import NormalizarNoticial from "../utils/normalizar_noticia";
import { bloquear, limitarDescricao, noticiaTech, temImagem } from "../utils/filtros";

const newsDataAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsdata.io/api/1/latest?apikey=${chaves.chaveNewsData}&country=us,at,br,cn,jp&language=pt&category=technology&image=1%20%20&removeduplicate=1%20%20&sort=relevancy%20%20&size=10&q=technology%20OR%20programming%20OR%20cybersecurity%20OR%20software%20OR%20hardware%20OR%20Operating%20System%20OR%20ia`);

    const resposta = await requisicao.json();
    console.log("Retorno da news data");
    console.log(resposta);
    if (!Array.isArray(resposta.results) || resposta.results.length === 0) { throw new Error("NewsData vazio") };
    const dadosFinais = resposta.results.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo)).filter(artigo => bloquear(artigo)).filter(artigo => noticiaTech(artigo)).filter(artigo => limitarDescricao(artigo));
    return dadosFinais;
};

export default newsDataAPI;