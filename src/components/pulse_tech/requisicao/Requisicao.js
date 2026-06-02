import { useState, useEffect } from 'react';
import Noticia from '../sessao/Noticia';
import Carregando from "../loadin/Carregando";

const Requisicao = () => {

    const [noticias, setNoticias] = useState([]);
    const [carregando, setCarregando] = useState(false);
    useEffect(() => {

        const buscarNoticias = async () => {
            try {
                const res = await fetch("/api/api_noticias");

                const data = await res.json();

                setNoticias(data);
                setCarregando(true);
            } catch (erro) {
                setNoticias([]);
                console.log("Erro " + erro);
            }

        };

        buscarNoticias();
    }, []);

    return (
        <>
            {
                carregando ? (
                    noticias?.map((noticia, id) => (<Noticia id={id} noticiaImg={noticia.imagem_src} noticaAlt={noticia.titulo} noticiaTitulo={noticia.titulo} noticiaDesc={noticia.descricao} noticiaLerMais={noticia.link_ler} />))
                ) : (
                    <Carregando />
                )}
        </>
    );
};


export default Requisicao;