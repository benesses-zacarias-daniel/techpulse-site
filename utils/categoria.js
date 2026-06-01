

const Categoria = (texto) => {
    const textoVerificar = texto.toLowerCase();

    const scores = {
        web: 0,
        hardware: 0,
        cloud: 0,
        ciberceguranca: 0,
        ia: 0
    };

    const palavrasWeb = [
        "javascript", "react", "node", "vue", "angular",
        "frontend", "backend", "web", "api"
    ];

    palavrasWeb.forEach(plChave => {
        if (textoVerificar.includes(plChave)) scores.web++;
    });

    const palavrasHardware = [
        "cpu", "gpu", "chip", "processor", "intel", "amd",
        "hardware", "device"
    ];

    palavrasHardware.forEach(plChave => {
        if (textoVerificar.includes(plChave)) scores.hardware++;
    });

    const palavrasCloud = [
        "cloud", "aws", "azure", "gcp", "server", "datacenter"
    ];

    palavrasCloud.forEach(plChave => {
        if (textoVerificar.includes(plChave)) scores.cloud++;
    });

    const palavrasCiberseguranca = [
        "hack", "security", "cyber", "malware", "virus", "attack"
    ];

    palavrasCiberseguranca.forEach(plChave => {
        if (textoVerificar.includes(plChave)) scores.cybersecurity++;
    });

    const palavrasIa = [
        "ai", "artificial intelligence", "openai",
        "machine learning", "llm", "gpt"
    ];

    palavrasIa.forEach(plChave => {
        if (textoVerificar.includes(plChave)) scores.ia++;
    });

    const categoriaFinal = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])[0];

    const [categoria, pontos] = categoriaFinal;

    const categoriaFormatada = categoriaFinal.charAt(0).toUpperCase() + categoriaFinal.slice(1);
    console.log(categoriaFormatada);

    if (pontos === 0) return "Tecnologia";

    return categoriaFinal;
};


export default Categoria;
