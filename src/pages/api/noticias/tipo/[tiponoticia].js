import { noticias } from "../noticias"
export default function handler(req, res) {
  const encontrado = noticias.filter((noticia) =>
    noticia.tiponoticia.toString() === req.query.tiponoticia);
  if (encontrado.length === 0) {
    return res.status(404).json({ error: "Notícia não encontrada" });
  }
  res.status(200).json(encontrado)
}