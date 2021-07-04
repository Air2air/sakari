import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "./../../public/sakari-logo.png";

export default function Header() {
  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" className={styles.navbar + "d-flex"}>
        <Nav.Link href="#home">Home</Nav.Link>

        <div className={styles.headerLogo}>
          <Image src={logo} />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">My Account</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
