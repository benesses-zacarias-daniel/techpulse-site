import { useScroll } from "../../contexts/ContextSessao";
import style from "./PodCasts.module.css";
import TechCast from "./TechCast";
import Ahu from "./ahu.webm";

const PodCasts = () => {
    const { podcasts } = useScroll();
    return (
        <section className={style.sessao_podcasts} id="podcasts" ref={podcasts}>
            <div className={style.conteudo_podcasts}>
                <h2>Podcast Semanal</h2>
                <TechCast src={Ahu} title="Episódio #01 - Futuro do Trabalho Tech" desc={"Conversamos com especialistas sobre como a automação está moldando novas carreiras e habilidades essenciais."} />
            </div>
        </section >
    )
}

export default PodCasts;