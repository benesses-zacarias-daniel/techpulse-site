

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

    palavrasWeb.forEach(k => {
        if (textoVerificar.includes(k)) scores.web++;
    });

    const palavrasHardware = [
        "cpu", "gpu", "chip", "processor", "intel", "amd",
        "hardware", "device"
    ];

    palavrasHardware.forEach(k => {
        if (textoVerificar.includes(k)) scores.hardware++;
    });

    const palavrasCloud = [
        "cloud", "aws", "azure", "gcp", "server", "datacenter"
    ];

    palavrasCloud.forEach(k => {
        if (textoVerificar.includes(k)) scores.cloud++;
    });

    const palavrasCiberseguranca = [
        "hack", "security", "cyber", "malware", "virus", "attack"
    ];

    palavrasCiberseguranca.forEach(k => {
        if (textoVerificar.includes(k)) scores.cybersecurity++;
    });

    const palavrasIa = [
        "ai", "artificial intelligence", "openai",
        "machine learning", "llm", "gpt"
    ];

    palavrasIa.forEach(k => {
        if (textoVerificar.includes(k)) scores.ia++;
    });

    const categoriaFinal = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])[0];

    const [categoria, pontos] = categoriaFinal;

    if (pontos === 0) return "Tecnologia";

    return categoria;
};


export default Categoria;
