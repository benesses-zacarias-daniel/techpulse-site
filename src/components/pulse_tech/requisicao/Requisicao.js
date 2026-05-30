import { useState, useEffect } from 'react';
import Noticia from '../sessao/Noticia';

const Requisicao = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {

        const buscarNoticias = async () => {
            try {
                const res = await fetch("/api/api_noticias");
                console.log(res);

                // const data = await res.json();
                // console.log(data);
                // if (data.articles) {
                //     setNoticias(data.articles);
                // } else {
                //     setNoticias([]);
                // }

            } catch (erro) {
                setNoticias([]);
                // console.log("Erro " + erro);
            }

        };

        buscarNoticias();
    }, []);

    return (
        <>
            <p></p>
            {/* {noticias?.slice(0, 18).map((noticia, id_noticia) => (<Noticia id={id_noticia} noticiaImg={noticia.image || noticia.image_url || noticia.urlToImage} noticaAlt={noticia.title} noticiaTitulo={noticia.title} noticiaDesc={noticia.description} noticiaLerMais={noticia.url || noticia.link} />))} */}
        </>);
};


export default Requisicao;