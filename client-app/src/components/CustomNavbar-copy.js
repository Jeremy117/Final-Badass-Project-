import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Huddle</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/SignIn"
              to="/SignIn"
            >
              Sign In
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/Register"
              to="/Register"
            >
              Register
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/Dashboard"
              to="/Dashboard"
            >
              Dashboard
            </NavItem>
            <NavItem
              eventKey={5}
              componentClass={Link}
              href="/Profile"
              to="/Profile"
            >
              Profile
            </NavItem>
            <NavItem
              eventKey={6}
              componentClass={Link}
              href="/Article"
              to="/Article"
            >
              Articles
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
