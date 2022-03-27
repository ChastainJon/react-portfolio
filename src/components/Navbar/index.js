import React, {useEffect} from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div className="main align-middle">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h2>
                            Jonathan Chastain
                        </h2>
                    </Col>
                    <Col xs={12} md={8}>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Link to="/aboutme">About Me</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/portfolio">Portfolio</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/contact">Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/resume">Resume</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar