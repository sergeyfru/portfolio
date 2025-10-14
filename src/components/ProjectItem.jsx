import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = ({ title, techStack, description, githubLink, demoLink ,demoIcon}) => {
    return (
        <div className="project">
            <div>
            <h2>{title}</h2>
            <h3>{techStack}</h3>
            <p>{description}</p>
            </div>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={demoIcon} />
                </a>
            </div>
        </div>
    );
}

export default ProjectItem;
