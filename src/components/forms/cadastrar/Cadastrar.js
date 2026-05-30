import { useUsuarioLogado } from "../../contexts/ContextLogado";
import { useState } from "react";
import Input from "../Input";
import Button from "../../buttons/Button";
import style from "../Forms.module.css";

const Cadastrar = () => {
    const [usuarioPadrao, setUsuarioPadrao] = useState({ id: null, email: "", password: "", userName: "" });//Usuário Padrão Pra Ser Preenchido
    const { usuarioLogado } = useUsuarioLogado();

    const onChangeEmail = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, email: val }));
    }

    const onChangePassword = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, password: val }));
    }

    const onChangeUserName = (val) => {
        setUsuarioPadrao((ant) => ({ ...ant, userName: val }));
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        const data = new Date();
        const aleat = Math.floor(Math.random() * 1000036)
        const id = data.getDay() + aleat;

        usuarioPadrao.id = id;
        guardaInformacoes(usuarioPadrao)
    }

    const guardaInformacoes = (usuarioInfo) => {

        if (!usuarioInfo) {
            return;
        }

        const usuariosSalvos = localStorage.getItem("usuarios");
        const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

        const existe = usuarios.find((usuario) => usuarios.email === usuarioInfo.email);

        if (existe) {
            alert("Esse E-mail já está cadastrado!");
            return;
        }

        usuarios.push(usuarioInfo);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("usuarioLogado", usuarioInfo.email);

        usuarioLogado(true);
    }


    const onInvalid = (evt, msg) => {
        evt.target.setCustomValidity(msg);
    }

    const onInput = (evt) => {
        evt.target.setCustomValidity("");
    }

    return (
        <div className={style.area_forms}>
            <form id="form_cr" onSubmit={(evt) => { onSubmit(evt) }} className={style.form}>
                <div className={style.div_input}>
                    <span>E-mail</span>
                    <Input type="email" minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} required onChange={(evt) => { evt.preventDefault(); onChangeEmail(evt.target.value) }} placeHolder={"exemplo@gmail.com"} value={usuarioPadrao.email} />
                </div>
                <div className={style.div_input}>
                    <span>Senha</span>
                    <Input type="password" minLength={8} onInvalid={(evt) => {
                        if (evt.target.validity.valueMissing) {
                            onInvalid(evt, "Campo obrigatório. Preencha por favor!")
                        } else if (evt.target.validity.tooShort) {
                            let tam_actual = evt.target.value.length;

                            onInvalid(evt, `A senha deve ter no mínimo 8 caracteres, você tem ${tam_actual} caracteres!`);
                        }
                    }} onInput={(evt) => { onInput(evt) }} required placeHolder={"••••••••"} value={usuarioPadrao.password} onChange={(evt) => { evt.preventDefault(); onChangePassword(evt.target.value) }} />
                </div>
                <div className={style.div_input}>
                    <span>Nome de Usuário</span>
                    <Input type="text" minLength={null} onInvalid={(evt) => { onInvalid(evt, "Campo obrigatório. Preencha por favor!") }} onInput={(evt) => { onInput(evt) }} required="Campo Obrigatório" placeHolder={"benesses_dev"} value={usuarioPadrao.userName} onChange={(evt) => { evt.preventDefault(); onChangeUserName(evt.target.value) }} />
                </div>
            </form>
            <div className={style.area_btn_criar}>
                <Button type="submit" estilo={""} form="form_cr" onClick={null} texto={"Criar Conta"} />
            </div>
        </div >
    );
}

export default Cadastrar;