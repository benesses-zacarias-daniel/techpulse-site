import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Perfil from "../perf/Perfil";
import "./Topo.module.css";

const Topo = () => {
    return (
        <header>
            <Logo />
            <Menu />
            <Perfil />
        </header>)
}

export default Topo;