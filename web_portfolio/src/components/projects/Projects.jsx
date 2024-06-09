
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import BoardBuddy from './BoardBuddy';
import VolunteersFiender from './VolunteersFiender';
// import './Projects.css'; // Adjust the path based on your file structure

const Projects = () => {
    return (
        <div id="projects" className='main'>
            <h1>My Projects</h1>
            <div className="projects-box">
                <div className="project">
                    <VolunteersFiender/>
                    <div className="project-links">
                        <a href="https://github.com/sergeyfru/Volunteers_Fiender" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.loom.com/share/4cc8c5659c564a03bcd8a818b94e9346" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faVideo} />
                        </a>
                    </div>
                </div>
                {/* <div className="project">
                    <h2>Budget Manager</h2>
                    <h3>NODE.js / SQL</h3>
                    <div className="project-links">
                        <a href="https://github.com/sergeyfru/Budget-Manager" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faVideo} />
                        </a>
                    </div>
                </div> */}
                <div className="project">
                    <BoardBuddy />
                    <div className="project-links">
                        <a href="https://github.com/sergeyfru/Final_Project" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://dashboard.render.com/web/srv-cpb3f6lds78s73eobhq0/deploys/dep-cpipdcsf7o1s73bkl3ag" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faVideo} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
