import { Link } from "react-router-dom";
import Img from "../../img/Img";
import style from "./Noticia.module.css";

const Noticia = ({ id, noticiaImg, noticaAlt, noticiaTitulo, noticiaDesc, categoria, noticiaLerMais }) => {
    return (
        <div id={id} className={style.noticia}>
            <Img src={noticiaImg} alt={noticaAlt} />
            <span className={style.categoria_noticia}>{categoria}</span>
            <div className={style.tituloNoticia}>
                <h2>{noticiaTitulo}</h2>
            </div>
            <div className={style.descNoticia}>
                <span>{noticiaDesc}</span>
                <Link to={`${noticiaLerMais}`} target="blank_">Ler mais</Link>
            </div>
        </div>
    );
}

export default Noticia;