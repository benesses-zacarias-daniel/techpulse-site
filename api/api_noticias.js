const TrazerNoticias = async (requisicao, resposta) => {
    try {
        const chaveGnews = process.env.GNEWS_API_KEY;
        const req = await fetch(`https://gnews.io/api/v4/search?q=technology OR artificial intelligence OR programming OR cybersecurity OR software OR hardware OR Operating System OR Sistema Operativo OR ia -agriculture -farming&lang=pt&max=18&token=${chaveGnews}`);
        console.log(chaveGnews);

        const noticias = await req.json();
        console.log(chaveGnews);

        return resposta.status(200).json(noticias);
    } catch (error) {
        resposta.status(200).json({ erro: "Erro ao buscar Notícias" });
    }
}

export default TrazerNoticias;