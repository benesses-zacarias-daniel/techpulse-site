import { Link } from "react-router-dom";
import { useScroll } from "../../contexts/ContextSessao";
import style from "./Menu.module.css"

const Menu = () => {
    const { sessaoActiva, setSessaoActiva, moverScroll } = useScroll();

    return (
        <nav>
            <div></div>
            <Link to={"/techpulse/home"} className={sessaoActiva === "home" ? `${style.menu_item} ${style.sessao_activa}` : `${style.menu_item}`} onClick={(evt) => {
                setSessaoActiva("home");
                moverScroll("home");
            }}>
                Home
            </Link>

            <Link to={"/techpulse/noticias"} className={sessaoActiva === "noticias" ? `${style.menu_item} ${style.sessao_activa}` : `${style.menu_item}`} onClick={(evt) => {
                setSessaoActiva("noticias");
                moverScroll("noticias");
            }}>
                Notícias
            </Link>

            <Link to={"/techpulse/reviews"} className={sessaoActiva === "reviews" ? `${style.menu_item} ${style.sessao_activa}` : `${style.menu_item}`} onClick={(evt) => {
                setSessaoActiva("reviews");
                moverScroll("reviews");
            }}>
                Reviews
            </Link>
            <Link to={"/techpulse/podcasts"} className={sessaoActiva === "podcasts" ? `${style.menu_item} ${style.sessao_activa}` : `${style.menu_item}`} onClick={(evt) => {
                setSessaoActiva("podcasts");
                moverScroll("podcasts");
            }}>
                PodCasts
            </Link>
            <div></div>
        </nav>
    )
}

export default Menu;