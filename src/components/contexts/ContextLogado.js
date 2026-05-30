import { createContext, useContext, useEffect, useState } from "react";

const UsuarioLogadoContext = createContext();

const UsuarioLogadoProvider = ({ children }) => {
    const [usuarioStatus, setUsuarioStatus] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const usuarioLogado = (status) => {
        setUsuarioStatus(status);
    }
    const carregado = (status) => {
        setCarregando(status);
    }
    useEffect(() => {
        try {
            const email = localStorage.getItem("usuarioLogado");

            const usuariosSalvos = localStorage.getItem("usuarios");

            if (!email || !usuariosSalvos) {
                carregado(false);
                return;
            }

            const usuarios = JSON.parse(usuariosSalvos);

            const usuarioLogado = usuarios.find(u => u.email === email);

            if (usuarioLogado) {
                setUsuario(usuarioLogado);
                setUsuarioStatus(true);
            }

        } catch (erro) {
            console.error("Erro ao carregar usuário: " + erro);
            localStorage.removeItem("usuarioLogado");
        } finally {
            carregado(false);
        }
    }, []);

    const login = (email, password) => {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(
            u => u.email === email && u.password === password
        );

        if (usuarioEncontrado) {
            setUsuario(usuarioEncontrado);
            setUsuarioStatus(true);
            localStorage.setItem("usuarioLogado", usuarioEncontrado.email); // salva só o email/id
            return true;
        }

        return false;
    };

    const logout = () => {
        setUsuario(null);
        setUsuarioStatus(false);
        localStorage.removeItem("usuarioLogado");
    };

    return (
        <UsuarioLogadoContext.Provider value={{ usuarioStatus, usuario, usuarioLogado, carregando, login, logout }} >
            {children}
        </UsuarioLogadoContext.Provider>
    )
}

const useUsuarioLogado = () => {
    const contexto = useContext(UsuarioLogadoContext);
    if (!contexto) {
        throw new Error("Usuario não está Logado")
    }

    return (
        contexto
    );
}

export {
    useUsuarioLogado
}

export default UsuarioLogadoProvider;