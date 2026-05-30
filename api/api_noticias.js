import gNewsAPI from "../services/gnews_api";
import newsAPI from "../services/news_api";
import newsDataAPI from "../services/news_data_api";
import noticiaLocal from "../services/noticia_local";

const funcoesNoticias = [
    gNewsAPI,
    newsAPI,
    newsDataAPI
];

const TrazerNoticias = async (requisicao, resposta) => {
    const chaves = {
        chaveGnews: process.env.GNEWS_API_KEY,
        chaveNewsData: process.env.NEWSDATA_KEY,
        chaveNewsAPI: process.env.NEWSAPI_KEY
    }

    try {

        console.log("Tamanho do provedor " + funcoesNoticias.length);
        console.log("Provedor de funções " + funcoesNoticias);

        for (const funcaoNoticia of funcoesNoticias) {
            try {
                const artigos = await funcaoNoticia(chaves);
                console.log("Retorno das APIS ");

                console.log(artigos);
                console.log(funcaoNoticia.name);
                // const noticias = await artigos.json();

                // if (artigos && artigos.length > 0) {
                //     return resposta.status(200).json(noticias)
                // }
            } catch (erro) {
                console.log("Funções notícia falhou, tentando próxima função! " + erro.message);

            }
        }

        return resposta.status(200).json({ articles: noticiaLocal() });

    } catch (error) {
        resposta.status(500).json({ erro: "Erro geral no sistema de notícias", detalhe: error.message });
    }
}

export default TrazerNoticias;