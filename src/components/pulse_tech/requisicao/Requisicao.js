import { useState, useEffect } from 'react';
import Noticia from '../sessao/Noticia';

const Requisicao = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {

        const buscarNoticias = async () => {
            try {
                const res = await fetch("/api/api_noticias");

                const data = await res.json();

                setNoticias(data);
            } catch (erro) {
                setNoticias([]);
                console.log("Erro " + erro);
            }

        };

        buscarNoticias();
    }, []);

    return (
        <>
            {noticias?.slice(0, 18).map((noticia, id) => (<Noticia id={id} noticiaImg={noticia.imagem_src} noticaAlt={noticia.titulo} noticiaTitulo={noticia.titulo} categoria={noticia.categoria} noticiaDesc={noticia.descricao} noticiaLerMais={noticia.link_ler} />))}
        </>);
};


export default Requisicao;