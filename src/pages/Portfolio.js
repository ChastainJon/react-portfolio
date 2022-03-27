import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Portfolio(){
    return(
        <Row xs={1} md={2} className="g-4">
            <Col xs={5}>
                <a href="https://github.com/YourFunkyDad/project-pizza" className="portfolio-card">
                    <Card className="card">
                        <Card.Img className="image" variant="top" src="https://user-images.githubusercontent.com/91103314/146656451-0be01eb8-4196-4add-8839-d7f77a3b879f.PNG"/>
                        <Card.Body>
                            <Card.Title>Project Pizza</Card.Title>
                            <Card.Text>
                                HTML, CSS, JavaScript
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
            <Col xs={5}>
                <a href="https://github.com/kjjackson619/project-02" className="portfolio-card">
                    <Card className="card">
                        <Card.Img className="image" variant="top" src="https://user-images.githubusercontent.com/47041038/154309665-d5d66cb5-46a6-4ee9-ba4f-c5e59e21e6c7.png"/>
                        <Card.Body>
                            <Card.Title>Pin-It</Card.Title>
                            <Card.Text>
                                Node.js, SQL, Express.js
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        </Row>
    )
}

export default Portfolio