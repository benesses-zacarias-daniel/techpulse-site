const noiciasTecnologicas = [
    "tecnologia",
    "programação",
    "software",
    "hardware",
    "computador",
    "desenvolvedor",
    "inteligência artificial",
    "ia",
    "segurança cibernética",
    "technology",
    "programming",
    "developer",
    "artificial intelligence",
    "ai",
    "machine learning",
    "software",
    "hardware",
    "cloud",
    "cybersecurity",
    "javascript",
    "java",
    "react",
    "node",
    "node.js",
    "python",
    "linux",
    "android",
    "ios",
    "gpu",
    "cpu",
    "chip"
    , "ai",
    "computer",
    "technology",
    "tech"
];

const noticiasBloquear = [
    "music",
    "album",
    "concert",
    "football",
    "soccer",
    "travel",
    "tourism",
    "celebrity",
    "movie"
];

const temImagem = (artigo) => {
    console.log("Entrou Verficar IMG");
    return Boolean(artigo.imagem_src);
}


const bloquear = (artigo) => {
    console.log("Entrou Bloquear");
    const texto = `${artigo.titulo} ${artigo.descriacao}`.toLowerCase();
    return !noticiasBloquear.some(palavra => texto.includes(palavra));
}

const limitarDescricao = (texto, tamanho = 120) => {
    console.log("Entrou reduzir");
    if (!texto) return "";
    return texto.length > tamanho ? texto.slice(0, tamanho) + "..." : texto;
}

const noticiaTech = (artigo) => {
    console.log("Entrou noticias Tech");
    const texto = (artigo.titulo + " " + artigo.decricao).toLowerCase();

    return noiciasTecnologicas.some(palavra =>
        texto.includes(palavra)
    );
};


export {
    temImagem,
    bloquear,
    noticiaTech,
    limitarDescricao
}