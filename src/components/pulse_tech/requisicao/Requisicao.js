import { useState, useEffect } from 'react';
// import Noticia from '../sessao/Noticia';

const Requisicao = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {

        const buscarNoticias = async () => {
            try {
                console.log("Chegou");

                const res = await fetch("/api/api_noticias");
                console.log(res);

                const data = await res.json();

                setNoticias(data.articles || []);
            } catch (erro) {
                setNoticias([]);
                console.log("Erro " + erro);
            }

        };

        buscarNoticias();
    }, []);

    return (
        <>
            {noticias?.slice(0, 18).map((noticia, id_noticia) => (<Noticia id={id_noticia} noticiaImg={noticia.image || noticia.image_url || noticia.urlToImage} noticaAlt={noticia.title} noticiaTitulo={noticia.title} noticiaDesc={noticia.description} noticiaLerMais={noticia.url || noticia.link} />))}
        </>);
};


export default Requisicao;