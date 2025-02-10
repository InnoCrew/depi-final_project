import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../index.css";
import "./navbar.css";
import { TbCategory2 } from "react-icons/tb";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Destinations", path: "/destinations" },
  { name: "Blogs", path: "/blogs" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("EN");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary " sticky="top">
      <Container fluid className="px-2">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{" "}
          <span className="font-paragraph fw-medium fs-4">Polaris</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="ms-2 order-5 border-0 "
        >
          <span className="toggler"></span>
          <span className="toggler"></span>
          <span className="toggler"></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Polaris
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-center flex-grow-1 pe-3 gap-2"
              defaultActiveKey="/"
            >
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={link.path}
                  className="navbar-link text-center text-black"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>

            <div className="d-flex align-items-center justify-content-between gap-2 pe-4">
              {/* Language Dropdown */}
              <div className="flex-lg-fill d-flex align-items-center gap-1">
                <FaGlobe />
                <NavDropdown title={lang} id="dropdown-language" align="end">
                  <NavDropdown.Item onClick={() => setLang("AR")}>
                    Arabic (AR)
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setLang("EN")}>
                    English (EN)
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Theme Toggle Button */}
              <Button
                variant="link"
                onClick={toggleTheme}
                className="theme-toggle"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </Button>

              {/* Sign In Button */}

              {/* Sign In Button */}
            </div>
            <Button variant="outline-dark" as={NavLink} to="/login">
              Sign In
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Button
          variant=""
          className="bg-yellow  text-black profile-btn main-transition hover-bg-white ms-md-2 order-4 ms-auto"
        >
          <TbCategory2 size={20} />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
