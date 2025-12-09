import { Container } from 'react-bootstrap'
import Cards from '../components/cards'
export async function getServerSideProps(req) {
    // Fetch data from  API notícias
    const res = await fetch('https://noticiasapi-omega.vercel.app/noticias/id/' + req.query.id)
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container className="text-center">
            <Cards idnoticia={noticia[0]._id} conteudonoticia={noticia[0].conteudonoticia}
                titulonoticia={noticia[0].titulonoticia} datahoracadastro={noticia[0].datahoracadastro}
                tiponoticia={noticia[0].tiponoticia} />
        </Container>
    </>
}
