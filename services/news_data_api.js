import { NormalizarNoticial } from "../utils/normalizar_noticia";
import Categoria from "../utils/categoria";

const newsDataAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsdata.io/api/1/news?apikey=${chaves.chaveNewsData}&q=technology OR ia OR programming OR cybersecurity OR software OR hardware OR Operating System&language=pt`);

    const resposta = await requisicao.json();

    if (!Array.isArray(resposta.results) || resposta.results.length === 0) { throw new Error("NewsData vazio") };

    return resposta.results.slice(0, 9).map(artigo => NormalizarNoticial(artigo));
};

export default newsDataAPI;