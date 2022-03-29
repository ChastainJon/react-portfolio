import React from "react";
import { Col, Card } from "react-bootstrap";

function Project(project){
    const{name, description, image, link} = project
    return(
        <Col xs={5}>
            <a href={link} className="portfolio-card">
                <Card className="card">
                    <Card.Img className="image" variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    )
}

export default Project