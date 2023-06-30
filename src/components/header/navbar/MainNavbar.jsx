import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import "./MainNavbar.scss";

export default function MainNavbar() {
   return (
      <>
         <Navbar bg="primary" className="main-navbar" data-bs-theme="dark">
            <Container>
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               <Nav className="me-auto">
                  <NavLink to="/" className="nav-link">
                     Popular
                  </NavLink>
                  <NavLink to="/now-playing" className="nav-link">
                     Now-playing
                  </NavLink>
                  <NavLink to="/about" className="nav-link">
                     About
                  </NavLink>
               </Nav>
            </Container>
         </Navbar>
      </>
   );
}
