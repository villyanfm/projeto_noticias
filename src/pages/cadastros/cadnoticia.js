import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticia() {
    return (
        <Container>
            <Row>
                <Col md={1}>
                Informação
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="titulonoticia">
                            <Form.Label>Título Notícia</Form.Label>
                            <Form.Control type="text" className='bg-success-subtle' placeholder="Informe o Título da Notícia" maxLength={100} />
                            <Form.Text className="text-muted">
                                Aqui você deve informar o título de sua notícia.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="conteudonoticia">
                            <Form.Label>Conteúdo da Notícia</Form.Label>
                            <Form.Control as="textarea" rows={3} className='bg-success-subtle' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tiponoticia">
                            <Form.Select aria-label="Tipo de notícia" className='bg-success-subtle'>
                                <option>Selecione um tipo de Notícia</option>
                                <option value="1">Ciência</option>
                                <option value="2">Educação</option>
                                <option value="3">Pesquisa</option>
                                <option value="4">Esportes</option>
                                <option value="5">Cultura</option>
                                <option value="6">Entreterimento</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={2}>
                Seja objetivo no cadastro da sua notícia
                </Col>
            </Row>
        </Container>
    )
}
