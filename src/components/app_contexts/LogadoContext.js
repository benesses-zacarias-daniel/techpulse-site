import UsuarioLogadoProvider from "../contexts/ContextLogado"
import Rotas from "./Rotas";

const LogadoContext = () => {

    return (

        <UsuarioLogadoProvider>
            <Rotas />
        </UsuarioLogadoProvider>
    )
}


export default LogadoContext;