
const chave = {
    chaveYoutube: process.env.YOUTUBE_API_KEY
}

const TrazerVideo = async (requisicao, resposta) => {
    try {
        const req = await fetch("https://youtube.com/");

        if (!req) {
            return resposta.status(200).json(req)
        }
    } catch (erro) {

    }
}


export default TrazerVideo;