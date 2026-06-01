import NormalizarNoticial from "../utils/normalizar_noticia";
import Categoria from "../utils/categoria";
import { temImagem } from "../utils/filtros";

const newsDataAPI = async (chaves) => {
    const requisicao = await fetch(`https://newsdata.io/api/1/news?apikey=${chaves.chaveNewsData}&q=technology OR ia OR programming OR cybersecurity OR software OR hardware OR Operating System&language=pt`);

    const resposta = await requisicao.json();
    console.log("Retorno da news data");
    console.log(resposta);
    if (!Array.isArray(resposta.results) || resposta.results.length === 0) { throw new Error("NewsData vazio") };
    const dadosFinais = resposta.results.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo));

    return dadosFinais;
};

export default newsDataAPI;