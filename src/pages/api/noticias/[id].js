import { noticias } from "./noticias"
export default function handler(req, res) {
  const encontrado = noticias.find((noticia) =>
    noticia.idnoticia.toString() === req.query.id);
  if (!encontrado) {
    return res.status(404).json({ error: "Notícia não encontrada" });
  }
  res.status(200).json(encontrado)
}