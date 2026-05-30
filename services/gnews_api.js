import { NormalizarNoticial } from "../utils/normalizar_noticia";

const gNewsAPI = async (chaves) => {
    const requisicao = await fetch(`https://gnews.io/api/v4/search?q=technology%20artificial%20intelligence%20programming%20cybersecurity%20software%20hardware%20Operating%20System%20Sistema%20Operativo%20ia&lang=pt&max=18&apikey=${chaves.chaveGnews}`);

    const resposta = await requisicao.json();

    if (!resposta.articles) { throw new Error("GNews vazio") };

    return resposta.articles.slice(0, 18).map(artigo => NormalizarNoticial(artigo));
};


export default gNewsAPI;