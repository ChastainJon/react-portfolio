import { Row } from "react-bootstrap"
import Project from "../components/Project"

const projects = [
    {
        name: "Project Pizza",
        description: "HTML, CSS, JavaScript",
        image: "https://user-images.githubusercontent.com/91103314/146656451-0be01eb8-4196-4add-8839-d7f77a3b879f.PNG",
        link: "https://github.com/YourFunkyDad/project-pizza"
    },
    {
        name: "Pin-It!",
        description: "Node.js, SQL, Express.js",
        image: "https://user-images.githubusercontent.com/47041038/154309665-d5d66cb5-46a6-4ee9-ba4f-c5e59e21e6c7.png",
        link: "https://github.com/kjjackson619/project-02",
    }
]

function Portfolio(){
    return(
        <Row xs={1} md={2} className="g-4">
            {projects.map((project) => (
                <Project
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    link = {project.link}
                ></Project>
            ))}
        </Row>
    )
}

export default Portfolio