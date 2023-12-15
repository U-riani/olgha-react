import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
        <Navbar.Brand href="/" className="ms-auto me-auto">
          OLGA
        </Navbar.Brand>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="justify-content-center">
          <Nav>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/priceList">PRICE LIST</Nav.Link>
            <Nav.Link href="/Contact">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
