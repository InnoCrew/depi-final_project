import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { FaGlobe, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Blogs", path: "/blogs" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary " sticky="top">
      <Container fluid className="px-4">
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
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
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
                  className="navbar-link text-center"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>

            <div className="d-flex align-items-center gap-4">
              {/* Profile Dropdown */}
              <NavDropdown title={<FaUser />} id="dropdown-profile" align="end">
                <NavDropdown.Item as={NavLink} to="/profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>

              {/* Language Dropdown */}
              <NavDropdown
                title={<FaGlobe />}
                id="dropdown-language"
                className=""
                align="end"
              >
                <NavDropdown.Item>Arabic (AR)</NavDropdown.Item>
                <NavDropdown.Item>English (EN)</NavDropdown.Item>
                <NavDropdown.Item>Español (ES)</NavDropdown.Item>
                <NavDropdown.Item>Français (FR)</NavDropdown.Item>
              </NavDropdown>

              {/* Theme Toggle Button */}
              <Button
                variant="link"
                onClick={toggleTheme}
                className="theme-toggle"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
