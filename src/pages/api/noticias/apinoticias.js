import {noticias} from "./noticias"
export default function handler(req, res) {
  res.status(200).json(noticias)
}