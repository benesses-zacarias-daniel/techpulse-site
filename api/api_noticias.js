const TrazerNoticias = async (requisicao, resposta) => {
    try {
        console.log("Trazer Noticias");

        const chaveGnews = process.env.GNEWS_API_KEY;
        console.log(chaveGnews);

        const req = await fetch(`https://gnews.io/api/v4/search?q=technology%20artificial%20intelligence%20programming%20cybersecurity%20software%20hardware%20Operating%20System%20Sistema%20Operativo%20ia&lang=pt&max=18&apikey=${chaveGnews}`);
        const noticias = await req.json();

        if (!noticias || !noticias.articles) {
            return resposta.status(200).json({
                articles: [],
                erro: "Sem notícias disponíveis"
            })
        }

        return resposta.status(200).json(noticias);
    } catch (error) {
        resposta.status(500).json({ erro: "Erro ao buscar Notícias", detalhe: error.message });
    }
}

export default TrazerNoticias;