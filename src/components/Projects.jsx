import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BoardBuddy from "./projects/BoardBuddy";
import VolunteersFiender from "./projects/VolunteersFiender";
import MediTrack from "./projects/MediTrack.jsx";
import ProjectItem from "./ProjectItem.jsx";
// import './Projects.css'; // Adjust the path based on your file structure

const Projects = () => {
  return (
    <div id="projects" className="main">
      <h1>My Projects</h1>
      <div className="projects-box">
        <ProjectItem
          title="Volunteers Fiender"
          techStack="Python, PostgreSQL"
          description={
            <>
              This program is designed to assist volunteers in finding suitable
              organizations and to help organizations connect with potential
              volunteers.
              <br />
              The project involved extensive work with SQL and Python to manage
              and manipulate data effectively.
              <br />
              We developed and created a robust database structure designed to
              store volunteer and organization information efficiently.
            </>
          }
          githubLink="https://github.com/sergeyfru/Volunteers_Fiender"
          demoLink="https://www.loom.com/share/4cc8c5659c564a03bcd8a818b94e9346"
          demoIcon={faVideo}
        />
        <ProjectItem
          title="MediTrack"
          techStack="React, Node.js, PostgreSQL"
          description={
            <>
              Medication tracking app with automated reminder system. <br />
              Built with React + MUI for the frontend and Node.js + PostgreSQL
              for the backend. <br />
              Implemented email notifications and custom CRON jobs for
              reminders. <br />
              Designed a fully responsive UI with accessibility in mind.
            </>
          }
          githubLink="https://github.com/sergeyfru/MediTrack"
          demoLink="https://meditrack-s83s.onrender.com"
          demoIcon={faArrowUpRightFromSquare}
        />
        <ProjectItem
          title="Board Buddy"
          techStack="React, Redux, TypeScript, Node.js, PostgreSQL"
          description={
            <>
              BoardBuddy is your ultimate tool for board game enthusiasts,
              seamlessly connecting friends and simplifying game selection for
              your gatherings. <br />
              Built a full-stack platform with React, TypeScript, Node.js, and
              PostgreSQL. <br />
              Developed core features for collaborative game collection
              creation. <br />
              Designed scalable architecture for handling multi-user data
              interactions and synchronizing state across multiple users. <br />
              Special attention was given to UI complexity and usability.
            </>
          }
          githubLink="https://github.com/sergeyfru/BoardBuddy"
          demoLink="https://dashboard.render.com/web/srv-cpb3f6lds78s73eobhq0/deploys/dep-cpipdcsf7o1s73bkl3ag"
          demoIcon={faArrowUpRightFromSquare}
        />

        <ProjectItem
          title="Budget Manager"
          techStack="React, Node.js, PostgreSQL"
          description={
            <>
              Budget Manager is a web application designed to help users track
              and manage their personal finances efficiently. <br />
              Built with Node.js for the backend and SQL for data storage and
              management. <br />
              Implemented features for income and expense tracking, budget
              categorization, and reporting. <br />
              Designed a user-friendly and responsive interface for seamless
              financial management.
            </>
          }
          githubLink="https://github.com/sergeyfru/Budget-Manager"
          demoLink="#"
          demoIcon={faArrowUpRightFromSquare}
        />
      </div>
    </div>
  );
};

export default Projects;
