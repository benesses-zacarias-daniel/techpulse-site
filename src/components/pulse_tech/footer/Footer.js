import Nome from "../../nome/Nome";
import style from "./Footer.module.css";
import Logo from "../../assets/logo1SF.png";
import Img from "../../img/Img";
import { useScroll } from "../../contexts/ContextSessao";
import { Link } from "react-router-dom";

const Footer = () => {
    const { moverScroll } = useScroll();

    return (
        <footer>
            <div className={style.area_pulse_footer}>
                <div className={style.footer_pulse}>
                    <div className={style.footer_nome}>
                        <Img src={Logo} alt={"Logo da TechPulse"} />
                        <h2>
                            <Nome />
                        </h2>
                    </div>
                    <h3>Informação de qualidade para mentes inovadoras.</h3>
                </div>
                <div className={style.acesso_rapido}>
                    <h3 className={style.nav}>Navegação</h3>
                    <span className={style.acesso_op} onClick={(evt) => {
                        moverScroll("home");
                    }}>
                        <Link to={"/techpulse/home"}>
                            Home
                        </Link>
                    </span>
                    <span className={style.acesso_op} onClick={(evt) => {
                        moverScroll("noticias");
                    }}>
                        <Link to={"/techpulse/noticias"}>
                            Notícias
                        </Link>
                    </span>
                    <span className={style.acesso_op} onClick={(evt) => {
                        moverScroll("reviews");
                    }}>
                        <Link to={"/techpulse/reviews"}>
                            Reviews
                        </Link>
                    </span>
                    <span className={style.acesso_op} onClick={(evt) => {
                        moverScroll("podcasts");
                    }}>
                        <Link to={"/techpulse/podcasts"}>
                            Podcasts
                        </Link>
                    </span>

                </div>
            </div>
            <hr className={style.linha} />
            <div className={style.coprigt}>
                <div><span>&copy; 2026 Projecto TechPulse. Todos os direitos reservados.</span></div>
                <div>Desenvolvido por <span className={style.criador_}> <span className={style.partes}>B</span>enesses  <span className={style.partes}>Z</span>acarias  <span className={style.partes}>D</span>aniel</span>. Mantenha-se atualizado com o amanhã.</div>
            </div>
        </footer>
    )
}

export default Footer;