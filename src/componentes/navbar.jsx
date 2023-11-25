import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { NavDropdown } from "react-bootstrap";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
      <NavDropdown title="Tienda" id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/Category/ABC"> Polvo ABC </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/Category/Co2"> Co2 </NavDropdown.Item>
      </NavDropdown>
        <Link to="/Nosotros"> Nosotros </Link>
        <Link to="/cart">
        
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};