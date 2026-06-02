import { HashRouter } from "react-router-dom";
import style from "./Aplicacao.module.css"
import ScrollProvider from "../contexts/ContextSessao";
import TechPulse from "../pulse_tech/TechPulse";


const Aplicacao = () => {
    return (
        <HashRouter>
            <div className={style.app}>
                <ScrollProvider>
                    <TechPulse />
                </ScrollProvider>
            </div>
        </HashRouter>
    )
}


export default Aplicacao