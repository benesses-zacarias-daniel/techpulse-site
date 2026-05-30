import style from "./Sessao.module.css";
import Home from "./Home";
import Noticias from "./Noticias";
import PodCasts from "./PodCasts";
import Reviews from "./Reviews";

const Sessao = () => {
    return (
        <section className={style.sessao_conteudo}>
            <Home />
            <Noticias />
            <Reviews />
            <PodCasts />
        </section>
    )
}

export default Sessao;