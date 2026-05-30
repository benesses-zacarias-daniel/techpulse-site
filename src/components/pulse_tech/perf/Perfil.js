import { Link } from "react-router-dom";
import Img from "../../img/Img";
import Usuario from "../../assets/user1.svg";
import Button from "../../buttons/Button";
import InfoUsuario from "./InfoUsuario";
import { useState } from "react";
import style from "./Perfil.module.css";
import { useScroll } from "../../contexts/ContextSessao";

const Perfil = () => {
    const [mostrarUserInfo, setMostrarUserInfo] = useState(false);
    const { moverScroll } = useScroll();

    const onClick = () => {
        mostrarUserInfo ? setMostrarUserInfo(false) : setMostrarUserInfo(true);
        moverScroll("home");
    }

    return (
        <div className={style.area_perfil}>
            <Link to={"/techpulse/home"}>
                <Button texto={<Img src={Usuario} alt={"Icone azul de usuário"} />} onClick={(evt) => { onClick() }} />
            </Link>
            {mostrarUserInfo ? (<InfoUsuario onClick={(evt) => { setMostrarUserInfo(false) }} />) : (<></>)}
        </div>
    );
}


export default Perfil;