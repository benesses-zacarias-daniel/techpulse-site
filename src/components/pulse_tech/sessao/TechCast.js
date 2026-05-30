import Img from "../../img/Img";
import style from "./TechCast.module.css";
import TechCastIcone from "../../assets/TechCast.png"

const TechCast = ({ src, title = "Áudio", desc }) => {
    return (
        <div className={style.area_audio}>
            <div className={style.audio_icon}><Img src={TechCastIcone} alt={"Imagem de PodCast"} /></div>
            <div className={style.titulo}>
                <h3>{title}</h3>
                <span className={style.desc}>{desc}</span>
            </div>
            <audio className={style.audio} src={src} controls preload="metadata" />
        </div>
    );
}

export default TechCast;