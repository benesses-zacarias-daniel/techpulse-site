import { createContext, useContext, useRef, useState } from "react";


const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const [sessaoActiva, setSessaoActiva] = useState("home");

    const home = useRef(null);
    const noticias = useRef(null);
    const reviews = useRef(null);
    const podcasts = useRef(null);

    // const sessoesRef = {
    //     home: home,
    //     noticias: noticias,
    //     reviews: reviews,
    //     podcasts: podcasts
    // };

    const moverScroll = (sessao) => {
        const ref = {
            home: home,
            noticias: noticias,
            reviews: reviews,
            podcasts: podcasts
        }

        ref[sessao]?.current?.scrollIntoView({ behavior: "smooth" });
        setSessaoActiva(sessao);
    }

    // useEffect(() => {
    //     const observador = new IntersectionObserver(
    //         (entradas) => {
    //             entradas.forEach((entrada) => {
    //                 if (entrada.isIntersecting) {
    //                     const sessaoActiva = entrada.target.id;
    //                     setSessaoActiva(sessaoActiva);
    //                 }
    //             })
    //         }, { threshold: 0.19 }
    //     );

    //     Object.values(sessoesRef).forEach((ref) => {
    //         if (ref.current) {
    //             observador.observe(ref.current);
    //         }
    //     })

    //     return () => observador.disconnect();
    // });

    return (
        <ScrollContext.Provider value={{ sessaoActiva, setSessaoActiva, moverScroll, home, noticias, reviews, podcasts }}>
            {children}
        </ScrollContext.Provider>
    )
}

const useScroll = () => {
    const contexto = useContext(ScrollContext);
    if (!contexto) {
        throw new Error("useScroll deve ser chamado dentro da Sessão")
    }
    return (contexto);
}

export {
    useScroll
}
export default ScrollProvider;