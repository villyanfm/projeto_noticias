import { Container, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}
export default function Gssp2({ repo }) {
    return (<>
        <Container className="text-center">
            <h1>getServerSideProps-2 Example</h1>
            <p>{repo.stargazers_count}</p>
            <p>{repo.name}</p>
            <p>{repo.owner.login}</p>
            <p>{repo.topics[1]}</p>
        </Container>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Conteudo</th>
                        <th>Tipo Notícia</th>
                        <th>DH</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(noticias) ?
                        noticias.map(noticia => (
                            <tr key={noticia.idnoticia}>
                                <td>{noticia.idnoticia}</td>
                                <td>{noticia.titulonoticia}</td>
                                <td>{noticia.conteudonoticia}</td>
                                <td>{noticia.tiponoticia}</td>
                                <td>{noticia.datahoracadastro}</td>
                            </tr>
                        ))
                        : "não"}
                </tbody>
            </Table>
        </Container>
    </>
    )
}