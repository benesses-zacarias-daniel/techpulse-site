import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Autenticar.module.css";
import Img from "../img/Img";
import TechPulse from "../assets/Logo3LoginSF.png"
import Logar from "../forms/login/Logar";
import Cadastrar from "../forms/cadastrar/Cadastrar";
import Button from "../buttons/Button";
import Nome from "../nome/Nome";

const Autenticar = () => {

    const [info, setInfo] = useState(true);

    const onClickLogin = (val) => {
        setInfo(val);
        console.log(info);

    }

    const onClickCriar = (val) => {
        setInfo(val);
        console.log(info);
    }

    return (
        <div className={style.area_user}>
            <div className={style.area_geral}>
                <div className={style.area_img}>
                    <Img src={TechPulse} alt="Imagem de Usuario" />
                </div>
                {info ? (
                    <div className={style.saudacao_login}>
                        <h2>Bem-vindo de volta ao <Nome /></h2>
                        <span>Faça Login e continue a explorar o Mundo Tech</span>
                    </div>) : (
                    <div className={style.saudacao_login}>
                        <h2>Crie sua conta <Nome /> </h2>
                        <span>E fique à par das maiores notícias do Universo Tech</span>
                    </div>)}
                {info ? (
                    <Logar />
                ) : (
                    <Cadastrar />
                )}
                <div className={style.area_btn_escolha}>
                    {info ? (
                        <div>
                            Não tem uma conta?
                            <Link to={"autenticar/cadastrar"}>
                                <Button type="button" estilo={style.activa_} onClick={(evt) => { onClickCriar(false) }} texto={"Cadastrar"} />
                            </Link>
                        </div>
                    ) : (
                        <div>
                            Já tem uma conta? Fazer
                            <Link to={"autenticar/login"}>
                                <Button type="button" estilo={style.activa_} onClick={(evt) => { onClickLogin(true) }} texto={"Login"} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}


export default Autenticar;