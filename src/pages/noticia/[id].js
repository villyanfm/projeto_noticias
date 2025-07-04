import { Container } from 'react-bootstrap'
import Cards from '../components/cards'
export async function getServerSideProps(req) {
    // Fetch data from  API notícias
    const res = await fetch('http://localhost:3000/api/noticias/' + req.query.id)
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container className="text-center">
            <Cards idnoticia={noticia.idnoticia} conteudonoticia={noticia.conteudonoticia}
                titulonoticia={noticia.titulonoticia} datahoracadastro={noticia.datahoracadastro}
                tiponoticia={noticia.tiponoticia} />
        </Container>
    </>
}