import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <div className="container">
        <Link className="navbar-brand" to={'/'}> CetusApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={`/Portafolios`}>
              Portafolios
            </Link>
            <Link className="nav-link" to={`/Actividades`}>
              Actividades
            </Link>
            <Link className="nav-link" to={`/Usuarios`}>
              Usuarios
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
