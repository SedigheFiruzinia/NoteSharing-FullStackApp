import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () =>
 <footer className="page-footer font-small pt-5 "
style={{ backgroundColor: "rgba(41, 26, 33, 0.45)"}}>
    <Container fluid className="text-center text-md-left">
        <Row>
            <Col md={6} className="mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </Col>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 text-dark">
                <h5 className="text-uppercase ">Technologies</h5>
                <ul className="list-unstyled">
                    <li>React</li>
                    <li>Node.js + Express</li>
                    <li>Redux</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase  text-dark">Contact</h5>
                <ul className="list-unstyled ">
                    <li><a href="#!" className="link-dark">Github</a></li>
                    <li><a href="#!" className="text-white hover-black">Mail</a></li>
                    <li><a href="#!" className="text-dark">LinkedIn</a></li>
                </ul>
            </div>
        </Row>
    </Container>
    <hr className="clearfix w-100 pb-0"/>
    <div className="footer-copyright text-center pb-1">© 2022 Sedighe Firuzinia
    </div>

</footer>

export default Footer