const TrazerNoticias = async (requisicao, resposta) => {
    try {
        console.log("Trazer Noticias");

        const chaveGnews = process.env.GNEWS_API_KEY;
        console.log(chaveGnews);

        // const req = await fetch(`https://gnews.io/api/v4/search?q=technology OR artificial intelligence OR programming OR cybersecurity OR software OR hardware OR Operating System OR Sistema Operativo OR ia -agriculture -farming&lang=pt&max=18&apikey=${chaveGnews}`);
        // const noticias = await req.json();

        return resposta.status(200).json({
            ok: true
        });
    } catch (error) {
        resposta.status(200).json({ erro: "Erro ao buscar Notícias" });
    }
}

export default TrazerNoticias;