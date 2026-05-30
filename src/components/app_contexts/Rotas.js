import { useUsuarioLogado } from "../contexts/ContextLogado";
import ScrollProvider from "../contexts/ContextSessao";
import Autenticar from "../log/Autenticar";
import TechPulse from "../pulse_tech/TechPulse";
import style from "./Rotas.module.css";

const Rotas = () => {
    const { usuarioStatus, carregando } = useUsuarioLogado(false);

    if (carregando) {
        return null;
    }

    return (
        <div className={style.app}>
            {
                usuarioStatus ? (
                    <ScrollProvider>
                        <TechPulse />
                    </ScrollProvider>
                ) : (
                    <Autenticar />
                )
            }
        </div>
    )
}


export default Rotas;