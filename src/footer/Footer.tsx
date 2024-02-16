import React from "react";
import "../scss/footer/footer.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Instagram } from "../image/social-media/instagram.svg";
import { ReactComponent as Facebook } from "../image/social-media/facebook.svg";
import { ReactComponent as Twit } from "../image/social-media/twit.svg";
import { ReactComponent as Youtube } from "../image/social-media/youtube.svg";

function Footer() {
	return (
		<div className="containerM">
			<div className="footer">
				<div className="footer__address pb-4">
					<p className="text-uppercase footer__p-title">Monogram</p>
					<address className="footer__p-text">
						305 King St. W.<br></br>Suite 502<br></br>Kitchener, ON<br></br>
						Canada
					</address>
				</div>
				<div className="footer__subscribe pb-4">
					<p className="text-uppercase footer__p-title">
						Subscribe to Monogram
					</p>
					<p className="footer__p-text">
						Master productivity with Creative Console and get all the latest
						Monogram news.
					</p>
					<Form>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Control type="email" placeholder="Email address" />
								</Form.Group>
							</Col>
							<Col>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Col>
						</Row>
					</Form>
					<ul>
						<li>
							<a href="#">
								<Instagram className="footer__subscribe-social" />
							</a>
						</li>
						<li>
							<a href="#">
								<Twit className="footer__subscribe-social" />
							</a>
						</li>
						<li>
							<a href="#">
								<Facebook className="footer__subscribe-social" />
							</a>
						</li>
						<li>
							<a href="#">
								<Youtube className="footer__subscribe-social" />
							</a>
						</li>
					</ul>
					<div className="footer__copy">&copy; Monogram 2024</div>
				</div>
				<div className="footer__links pb-4">
					<p className="text-uppercase footer__p-title">Quick links</p>
					<ul className="footer__p-text">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">How it Works</a>
						</li>
						<li>
							<a href="#">Shop</a>
						</li>
						<li>
							<a href="#">Download</a>
						</li>
					</ul>
				</div>
				<div className="footer__help pb-4">
					<p className="text-uppercase footer__p-title">Help</p>
					<ul className="footer__p-text">
						<li>
							<a href="#">FAQs</a>
						</li>
						<li>
							<a href="#">Support Center</a>
						</li>
						<li>
							<a href="#">Shipping and Sales</a>
						</li>
					</ul>
				</div>
				<div className="footer__information pb-4">
					<p className="text-uppercase footer__p-title">INFORMATION</p>
					<ul className="footer__p-text">
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Work with us</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms of Use</a>
						</li>
						<li>
							<a href="#">Terms of Sale</a>
						</li>
						<li>
							<a href="#">Press Kit</a>
						</li>
					</ul>
				</div>
				<div className="footer__copyd pb-4 footer__p-text">
					&copy; Monogram 2024
				</div>
			</div>
		</div>
	);
}

export default Footer;
