import Sessao from "./sessao/Sessao";
import Topo from "./topo/Topo";
import style from "./TechPulse.module.css";
import Footer from "./footer/Footer";

const TechPulse = () => {

    return (
        <div className={style.area_geral_pulse}>
            <Topo />
            <main>
                <Sessao />
                <Footer />
            </main>
        </div>
    )
}

export default TechPulse;