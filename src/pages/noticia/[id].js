import { Container } from 'react-bootstrap'
import Cards from '../components/cards'
export async function getServerSideProps(req) {
    // Fetch data from  API notícias
    const res = await fetch('https://projeto-noticias-psi.vercel.app/api/noticias/' + req.query.id)
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container className="text-center">
            <Row xs={1} md={3} className="pt-2 g-4">
                <Cards idnoticia={noticia.idnoticia} conteudonoticia={noticia.conteudonoticia}
                    titulonoticia={noticia.titulonoticia} datahoracadastro={noticia.datahoracadastro}
                    tiponoticia={noticia.tiponoticia} />
            </Row>
        </Container>
    </>
}