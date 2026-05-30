const Categoria = (text) => {
    text = text.toLowerCase();

    if (text.includes("ai") || text.includes("artificial intelligence")) { return "AI" };
    if (text.includes("crypto") || text.includes("bitcoin")) { return "Cripo Moeda" };
    if (text.includes("security") || text.includes("hacker")) { return "Cibersegurança" };
    if (text.includes("programming") || text.includes("javascript")) { return "Progamação" };
    if (text.includes("phone") || text.includes("iphone") || text.includes("android")) { return "Mobile" };

    return "Tecnologia";
};


export default Categoria;
