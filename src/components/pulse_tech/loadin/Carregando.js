import style from "./Carregando.module.css";
import Img from "../../img/Img";
import ImgCarregar from "../../assets/load.svg";

const Carregando = () => {
    return (
        <div className={style.container_lodin}>
            <Img src={ImgCarregar} alt="Carregando" />
            <span>Carregando notícias...</span>
        </div>
    );
}


export default Carregando;