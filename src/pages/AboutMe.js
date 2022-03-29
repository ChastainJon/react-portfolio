import { Col, Row } from "react-bootstrap"

const AboutMe = () => {
    return(

        <Row className="justify-content-center">
            <Col xs={3}>
                <img className="aboutme-image" src="https://avatars.githubusercontent.com/u/89565158?v=4" alt="Jonathan Chastain"></img>
            </Col>
            <Col xs={7}>
                <p className="aboutme-text">I'm Jonathan Chastain, I perfer to go by Jon. I grew up around computers and grew up knowing I wanted to do something with them. I have been around development in some way or another since high school.</p>
            </Col>
        </Row>
    )
}

export default AboutMe