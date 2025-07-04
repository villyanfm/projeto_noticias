import { Card, Col } from "react-bootstrap";

export default function Cards(noticia) {
    return <>
        <Col key={noticia.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold bg-success-subtle">
                    <a href={`/noticia/${noticia.idnoticia}`}> {noticia.titulonoticia}</a>
                     </Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize fst-italic">
                        <a href={`/noticia/tipo/${noticia.tiponoticia}`}>{noticia.tiponoticia}</a>
                        </Card.Title>
                    <Card.Text>{noticia.conteudonoticia}</Card.Text>
                </Card.Body>
                <Card.Footer>{noticia.datahoracadastro}</Card.Footer>
            </Card>
        </Col>
    </>
}
// idnoticia*
// titulonoticia*
// conteudonoticia*
// tiponoticia
// datahoracadastro