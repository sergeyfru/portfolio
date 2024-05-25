import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faV, faVideo} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    return (
        <div id="projects">
            <h1>My Projects</h1>
            <div className="projects-box">
                <div className="project">
                    <h2>Volunteers Fiender</h2>
                    <h3>SQL / Python</h3>
                   <a href="https://github.com/sergeyfru/Volunteers_Fiender"><FontAwesomeIcon icon={faGithub}/></a> 
                   <a href="https://www.loom.com/share/4cc8c5659c564a03bcd8a818b94e9346"><FontAwesomeIcon icon={faVideo}/></a>
                </div>
                <div className="project">
                    <h2>Budget manager</h2>
                    <h3>NODE.js / SQL</h3>
                   <a href="https://github.com/sergeyfru/Budget-Manager"><FontAwesomeIcon icon={faGithub}/></a> 
                   <a href=""><FontAwesomeIcon icon={faVideo}/></a>
                </div>
                <div className="project">
                    <h2>Play In</h2>
                    <h3>Typescript / React / NODE.js / SQL </h3>
                   <a href="https://github.com/sergeyfru/Budget-Manager"><FontAwesomeIcon icon={faGithub}/></a> 
                   <a href=""><FontAwesomeIcon icon={faVideo}/></a>
                </div>
            </div>
        </div>
    )
}

export default Projects