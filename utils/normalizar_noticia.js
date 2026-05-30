import Categoria from "./categoria";

export const NormalizarNoticial = (item) => {
    return {
        titulo: item.title || "",
        descricao: item.description || item.content || "",

        imagem_src:
            item.img_url ||
            item.image_url ||
            item.urlToImage ||
            item.image ||
            null,

        link_ler: item.link || item.url || "",

        categoria: Categoria(item.title || "" + item.description || "")
    };
};