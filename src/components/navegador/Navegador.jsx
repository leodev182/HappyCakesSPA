import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Navegador = () => {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <div className="navStatic">
            <Nav className="me-auto">
              <Link to="/" className="text-white ms-3 text-decoration-none">
                🏠Home
              </Link>
              <Link
                to="/contacto"
                className="text-white ms-3 text-decoration-none"
              >
                📒Contacto
              </Link>
            </Nav>
            <Link to="/" className="text-white ms-4 text-decoration-none">
              Happy Cake🍰
            </Link>
            <Link />
          </div>
        </Container>
      </Navbar>
    </>
  );
};
