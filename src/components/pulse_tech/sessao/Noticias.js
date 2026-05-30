import { useScroll } from "../../contexts/ContextSessao";
import Noticia from "./Noticia";
import style from "./Noticias.module.css";
// import noticiaImg from "../../assets/user1.svg";
import noticiaImg2 from "../../assets/Logo2LoginSF.png";
import TechCast from "../../assets/TechCast.png";
import Requisicao from "../requisicao/Requisicao";

const Noticias = () => {
    const { noticias } = useScroll();

    return (
        <section className={style.sessao_noticias} id="noticias" ref={noticias}>
            <div className={style.conteudo_noticias}>
                <h2>Últimas Notícias &amp; Insights</h2>
                <div className={style.noticias}>
                    {/* <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"O salto dos LLMs em 2026"} noticiaDesc={"Como a nova arquitetura multimodal está criando assistentes que realmente compreendem o contexto emocional humano."} />
                    <Noticia noticiaImg={noticiaImg2} noticaAlt={"Technology"} noticiaTitulo={"Processadores de 1nm"} noticiaDesc={"A indústria de chips atinge o limite da física molecular para garantir eficiência energética sem precedentes em servidores."} />
                    <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"A expansão do 6G Global"} noticiaDesc={"Testes iniciais mostram latência zero para aplicações médicas e industriais de alta precisão em áreas remotas."} />
                    <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"Criptografia em Risco?"} noticiaDesc={"Especialistas debatem a urgência da segurança pós-quântica diante dos novos avanços em qubits estáveis."} />
                    <Noticia noticiaImg={noticiaImg2} noticaAlt={"Technology"} noticiaTitulo={"Segurança Autônoma"} noticiaDesc={`Sistemas que se "autocuram" contra ataques zero-day estão se tornando o novo padrão em infraestruturas críticas.`} />
                    <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"Data Centers Sustentáveis"} noticiaDesc={"A transição para resfriamento líquido e energia por fusão promete reduzir o impacto ambiental da IA em 80%."} />
                    <Noticia noticiaImg={TechCast} noticaAlt={"Technology"} noticiaTitulo={"Criptografia Pós-Quântica"} noticiaDesc={"As novas barreiras digitais para proteger dados sensíveis contra ataques avançados."} />
                    <Noticia noticiaImg={noticiaImg2} noticaAlt={"Technology"} noticiaTitulo={"Processadores de 2nm chegam ao mercado"} noticiaDesc={"Eficiência energética atinge níveis históricos nos novos dispositivos móveis."} />
                    <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"O Futuro do Tráfego Pago"} noticiaDesc={"Como a IA está automatizando a gestão de anúncios em redes sociais."} />
                    <Noticia noticiaImg={noticiaImg2} noticaAlt={"Technology"} noticiaTitulo={"Automação Industrial 5.0"} noticiaDesc={"A colaboração direta entre humanos e robôs no chão de fábrica."} />
                    <Noticia noticiaImg={TechCast} noticaAlt={"Technology"} noticiaTitulo={"Programação Funcional em Alta"} noticiaDesc={"Por que os novos paradigmas de programação estão dominando o backend."} />
                    <Noticia noticiaImg={noticiaImg} noticaAlt={"Technology"} noticiaTitulo={"Internet Global Via Satélite"} noticiaDesc={"A cobertura total do planeta e os desafios da latência zero."} /> */}
                    <Requisicao />
                    <Noticia noticiaImg={noticiaImg2} categoria={"Teste Teste"} noticaAlt={"Technology"} noticiaTitulo={"Novos Smartphones Dobráveis"} noticiaDesc={"A tecnologia OLED atingiu um novo patamar de durabilidade e brilho."} />
                    <Noticia noticiaImg={TechCast} noticaAlt={"Technology"} noticiaTitulo={"GPUs de 2026: O que esperar?"} noticiaDesc={"Performance em 8K nativo agora é uma realidade para o mercado gamer."} />
                    <Noticia noticiaImg={noticiaImg2} noticaAlt={"Technology"} noticiaTitulo={"Algoritmos de Autocura"} noticiaDesc={"Sistemas que corrigem bugs sozinhos antes mesmo do usuário perceber."} />
                </div>
            </div>
        </section>
    )
}

export default Noticias;