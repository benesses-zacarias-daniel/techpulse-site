import gNewsAPI from "../services/gnews_api";
import newsAPI from "../services/news_api";
import newsDataAPI from "../services/news_data_api";
import noticiaLocal from "../services/noticia_local";

const funcoesNoticias = [
    newsDataAPI,
    gNewsAPI,
    newsAPI
];

const TrazerNoticias = async (requisicao, resposta) => {

    const chaves = {
        chaveGnews: process.env.GNEWS_API_KEY,
        chaveNewsData: process.env.NEWSDATA_API_KEY,
        chaveNewsAPI: process.env.NEWSAPI_API_KEY
    }

    try {
        for (const funcaoNoticia of funcoesNoticias) {
            try {
                const artigos = await funcaoNoticia(chaves);
                console.log(funcaoNoticia.name);

                if (artigos && artigos.length > 0) {
                    return resposta.status(200).json(artigos);
                }
            } catch (erro) {
                console.log("Função notícia falhou, tentando próxima função! " + erro.message);

            }
        }

        return resposta.status(200).json({ articles: noticiaLocal() });

    } catch (error) {
        resposta.status(500).json({ erro: "Erro geral no sistema de notícias", detalhe: error.message });
    }
}

export default TrazerNoticias;