import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../styles/Menu.module.css'; 

export default function Menu() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className={`${styles.menudegrade} fs-6`}>
      <Container>
        <Navbar.Brand href="/">Info-B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/esportes">Esportes</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <NavDropdown title="ReactHook´s" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">UseState</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect">UseEffect</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Noticias" id="noticias">
              <NavDropdown.Item href="/cadastros/cadnoticia">Cadastro Notícias</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Função Next" id="fncnext">
              <NavDropdown.Item href="/funcaonext/gssp">GetServerSideProps</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gssp2">GetServerSideProps-2</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcard">GetServerSideProps-Card</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}