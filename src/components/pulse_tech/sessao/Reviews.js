import { useScroll } from "../../contexts/ContextSessao";
import style from "./Reviews.module.css"
import Review from "./Review";
import A8M from "./A8M.mp4"

const Reviews = () => {
    const { reviews } = useScroll();

    return (
        <section className={style.sessao_reviews} id="reviews" ref={reviews}>
            <div className={style.conteudo_reviews}>
                <h2>
                    Análises em Vídeo
                </h2>
                <Review title={"Título de teste"} src={A8M} />
            </div>
        </section>
    )
}

export default Reviews;