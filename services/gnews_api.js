import { bloquear, temImagem } from "../utils/filtros";
import NormalizarNoticial from "../utils/normalizar_noticia";

const gNewsAPI = async (chaves) => {
    const requisicao = await fetch(`https://gnews.io/api/v4/search?q=technology%20artificial%20intelligence%20programming%20cybersecurity%20software%20hardware%20Operating%20System%20Sistema%20Operativo%20ia&lang=pt&max=18&apikey=${chaves.chaveGnews}`);

    const resposta = await requisicao.json();
    console.log("Retorno da gnews");
    console.log(resposta);

    if (!resposta.articles) { throw new Error("GNews vazio") };
    const dadosFinais = resposta.articles.map(artigo => NormalizarNoticial(artigo)).filter(artigo => temImagem(artigo)).filter(artigo => bloquear(artigo));

    return dadosFinais;
};


export default gNewsAPI;