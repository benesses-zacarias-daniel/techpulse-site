import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUsuarioLogado } from "../../contexts/ContextLogado";
import Img from "../../img/Img";
import style from "./Perfil.module.css";
import Logo from "../../assets/Logo2LoginSF.png"
import Input from "../../forms/Input";
import Button from "../../buttons/Button";
import Fexar from "../../assets/fechar_p.svg"

const InfoUsuario = ({ onClick }) => {

    const { logout } = useUsuarioLogado();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [mudouAlgo, setMudouAlgo] = useState(false);

    const usuario_logado = { id: null, email: "", password: "", userName: "" };

    useEffect(() => {

        const usuariosSalvos = localStorage.getItem("usuarios");
        const usuarioLogado = localStorage.getItem("usuarioLogado");

        if (!usuariosSalvos || !usuarioLogado) {
            return;
        };

        const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];
        const usuario = usuarios.find(usuario => usuario.email === usuarioLogado);

        setEmail(usuario.email);
        setPassword(usuario.password);
        setUserName(usuario.userName);
    }, []);

    const onClickOcultar = (evt) => {
        if (evt.target === evt.currentTarget || evt.target.parentNode.parentNode.id === "ocultar") {
            onClick();
        }
    }

    const onChangeUserName = (val) => {
        setUserName(val);
        setMudouAlgo(true);
    }

    const onChangeEmail = (val) => {
        setEmail(val);
        setMudouAlgo(true);
    }

    const onChangePassword = (val) => {
        setPassword(val);
        setMudouAlgo(true);
    }

    const onClickLogout = () => {
        logout();
    }

    const onClickSalvar = (evt) => {
        evt.preventDefault();
        usuario_logado.email = email;
        usuario_logado.password = password;
        usuario_logado.userName = userName;

        guardaInformacoes(usuario_logado);
    }

    const guardaInformacoes = (usuarioInfo) => {

        if (!usuarioInfo) {
            return;
        }

        const usuariosSalvos = localStorage.getItem("usuarios");
        const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

        const existe = usuarios.find((usuario) => usuario.email === usuarioInfo.email);
        usuarioInfo.id = existe.id;

        usuarios.pop(existe);
        usuarios.push(usuarioInfo);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("usuarioLogado", usuarioInfo.email);

        if (mudouAlgo) {
            alert("Informações alteradas com sucesso!");
            setMudouAlgo(false)
        }
    }

    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    }

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    }

    return (
        <div onClick={(evt) => { onClickOcultar(evt) }} className={style.area_info_user}>
            <div className={style.area_info_user_info}>
                <div className={style.area_info_user_sair}>
                    <div id="ocultar" onClick={(evt) => { onClickOcultar(evt) }} >
                        <Button estilo={""} type={"button"} form={""} onClick={(evt) => { }} texto={<Img src={Fexar} alt={"Icone de X"} />} />
                    </div>
                </div>
                <div className={style.area_info_user_img}>
                    <Img src={Logo} alt={"Logo da TechPulse"} />
                </div>
                <div className={style.area_info_user_user_name}>
                    <h3>@{userName}</h3>
                </div>
                <div className={style.area_info_user_forms}>
                    <form id="form_info" className={style.form_info} onSubmit={(evt) => { onClickSalvar(evt) }}>
                        <div className={style.area_input}>
                            <p>E-mail</p>
                            <div className={style.div_input}>
                                <Input type={"email"} minLength={null} value={email} placeHolder={"exemplo@gmail.com"} onChange={(evt) => { onChangeEmail(evt.target.value) }} onInput={(evt) => { onInput(evt) }} onInvalid={(evt) => {
                                    onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                }} />
                            </div>
                        </div>
                        <div className={style.area_input}>
                            <p>Senha</p>
                            <div className={style.div_input}>
                                <Input type={"password"} minLength={null} value={password} placeHolder={"••••••••"} onChange={(evt) => { onChangePassword(evt.target.value) }} onInput={(evt) => {
                                    onInput(evt)
                                }} onInvalid={(evt) => {
                                    if (evt.target.validity.valueMissing) {
                                        onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                    } else if (evt.target.validity.tooShort) {
                                        let tam_actual = evt.target.value.length;
                                        onInvalid(evt, `A senha deve ter no mínimo 8 caracteres, você tem ${tam_actual} caracteres!`);
                                    }
                                }} />
                            </div>
                        </div>
                        <div className={style.area_input}>
                            <p>User Name</p>
                            <div className={style.div_input}>
                                <Input type={"text"} minLength={null} value={userName} placeHolder={"benesses_dev"} onChange={(evt) => { onChangeUserName(evt.target.value) }} onInput={(evt) => {
                                    onInput(evt)
                                }} onInvalid={(evt) => {
                                    onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                                }} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={style.area_info_user_btn}>
                    <Button estilo={style.salvar_alteracoes} type={"submit"} form={"form_info"} texto={"Salvar"} onClick={(evt) => { }} />
                    <Link to={"/autenticar/login"}>
                        <Button estilo={style.deslogar_conta} type={"button"} texto={"Sair da Conta"} onClick={(evt) => { onClickLogout() }} />
                    </Link>
                </div>
            </div>
        </div >
    );
}


export default InfoUsuario;