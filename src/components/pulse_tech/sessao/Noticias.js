import { useScroll } from "../../contexts/ContextSessao";
import Noticia from "./Noticia";
import style from "./Noticias.module.css";
// import noticiaImg from "../../assets/user1.svg";
import noticiaImg2 from "../../assets/Logo2LoginSF.png";
import TechCast from "../../assets/TechCast.png";
import Requisicao from "../requisicao/Requisicao";

const Noticias = () => {
    const { noticias } = useScroll();

    return (
        <section className={style.sessao_noticias} id="noticias" ref={noticias}>
            <div className={style.conteudo_noticias}>
                <h2>Últimas Notícias &amp; Insights</h2>
                <div className={style.noticias}>
                    <Requisicao />
                </div>
            </div>
        </section>
    )
}

export default Noticias;