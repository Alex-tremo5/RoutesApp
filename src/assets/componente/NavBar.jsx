import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div className="dir">
          <div>
            <span>🏠</span>
            <Link to="/" className="text-white ms-1 text-decoration-none">
              Home
            </Link>
          </div>
          <div id="mail">
            <span>📩</span>
            <Link
              to="/contact"
              className="text-white ms-1 text-decoration-none"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="brand">
          <span>🍰</span> <span></span>
          <Link to="/" className="navbar-brand">
            Happy Cake
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
