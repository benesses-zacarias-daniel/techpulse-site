import { Link } from "react-router-dom";
import Button from "../../buttons/Button";
import { useScroll } from "../../contexts/ContextSessao";
import style from "./Home.module.css"

const Home = () => {
    const { home, moverScroll } = useScroll();

    return (
        <section className={style.sessao_home} id="home" ref={home}>
            <div className={style.conteudo_home}>
                <h1>A Revolução Digital começa agora.</h1>
                <p>Conheça as tecnologias que estão redefinindo o mundo em 2026, da IA generativa aos chips neurais.</p>
                <Link to={"/techpulse/noticias"}>
                    <Button estilo={style.btn_explorar} type={"button"} onClick={(evt) => { moverScroll("noticias") }} texto={<h2>Explorar Conteúdo</h2>} form={null} />
                </Link>
            </div>
        </section>
    )
}

export default Home;