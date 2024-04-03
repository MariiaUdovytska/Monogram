import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "../scss/menu/menu.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as Logo } from "../image/logo/logo.svg";
import BagIcon from "../bag/BagIcon";
interface CustomLinkProps {
	to: string;
	children: ReactNode;
}

function Menu() {
	const [showNavDropdown, setShowNavDropdown] = useState(false);
	const [isOffcanvasShown, setIsOffcanvasShown] = useState(false);

	const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
		return (
			<Link
				to={to}
				onClick={() => setIsOffcanvasShown(false)}
				className="router-link"
			>
				{children}
			</Link>
		);
	};
	return (
		<div className="menu">
			<Navbar
				variant="dark"
				className="navbar-custom"
				expand="lg"
				onToggle={(expanded) => setShowNavDropdown(expanded)}
				collapseOnSelect
			>
				<Container fluid>
					<Navbar.Brand href="#home">
						<Logo className="navbar-custom__logo" />
					</Navbar.Brand>
					<div className="d-flex flex-row">
						<Navbar.Toggle
							aria-controls="offcanvasNavbar"
							onClick={() => setIsOffcanvasShown(!isOffcanvasShown)}
						/>
						<Navbar.Offcanvas
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
							placement="start"
							show={isOffcanvasShown}
							onHide={() => setIsOffcanvasShown(false)}
						>
							<Offcanvas.Header closeButton>
								<Navbar.Brand href="#home">
									<Logo className="navbar-custom__logo" />
								</Navbar.Brand>
							</Offcanvas.Header>
							<Offcanvas.Body className="navbar-custom__body">
								<Nav className="justify-content-end flex-grow-1 pe-3 align-items-start">
									<CustomLink to="/">How it Works</CustomLink>
									<NavDropdown
										className={
											isOffcanvasShown === true
												? "navbar-custom__body-dropdown-offc"
												: "navbar-custom__body-dropdown"
										}
										title="Workflows"
										id="offcanvasNavbarDropdown"
										defaultShow={showNavDropdown}
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
									<CustomLink to="/">Download</CustomLink>
									<CustomLink to="/">Blog</CustomLink>
									<CustomLink to="/">Support</CustomLink>
									<CustomLink to="/shop">Shop</CustomLink>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
						<Form className="d-flex align-items-center navbar-custom__basket">
							<Nav.Link className="navbar-custom__basket-i" href="#cart">
								<BagIcon />
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
		</div>
	);
}

export default Menu;
