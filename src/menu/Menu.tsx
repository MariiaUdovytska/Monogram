import React from "react";
import "../scss/menu/menu.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as Logo } from "../image/logo/logo.svg";

function Menu() {
	return (
		<Navbar variant="dark" className="navbar-custom" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<Logo className="navbar-custom__logo" />
				</Navbar.Brand>

				<div className="d-flex flex-row">
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body className="navbar-custom__body">
							<Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
								<Nav.Link href="#">How it Works</Nav.Link>
								<NavDropdown
									className="navbar-custom__body-dropdown"
									title="Workflows"
									id="offcanvasNavbarDropdown"
								>
									<NavDropdown.Item href="#action3">
										Audio console
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Photo console
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Video console
									</NavDropdown.Item>
									<NavDropdown.Item href="#action6">
										Mini console
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#">Download</Nav.Link>
								<Nav.Link href="#">Blog</Nav.Link>
								<Nav.Link href="#">Support</Nav.Link>
								<Nav.Link href="#">Shop</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
					<Form className="d-flex align-items-center navbar-custom__basket">
						<Nav.Link className="navbar-custom__basket-i" href="#cart">
							<i
								className="bi bi-bag"
								style={{ fontSize: "25px", color: "#efc2b3" }}
							></i>
						</Nav.Link>
						<NavDropdown title="USD" id="currencyDropdown">
							<NavDropdown.Item href="#USD">USD ($)</NavDropdown.Item>
							<NavDropdown.Item href="#EUR">EUR (€)</NavDropdown.Item>
							<NavDropdown.Item href="#AUD">AUD ($)</NavDropdown.Item>
							<NavDropdown.Item href="#CAD">CAD ($)</NavDropdown.Item>
							<NavDropdown.Item href="#GBP">GBP (£)</NavDropdown.Item>
							<NavDropdown.Item href="#KRW">KRW (₩)</NavDropdown.Item>
							<NavDropdown.Item href="#JPY">JPY (¥)</NavDropdown.Item>
						</NavDropdown>
					</Form>
				</div>
			</Container>
		</Navbar>
	);
}

export default Menu;
