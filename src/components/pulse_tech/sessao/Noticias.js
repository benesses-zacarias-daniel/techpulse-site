import { useScroll } from "../../contexts/ContextSessao";
import style from "./Noticias.module.css";
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