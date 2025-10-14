import css from '../assets/css.svg'
import html from '../assets/html.svg'
import bootstrap from '../assets/Bootstrap.svg'
import git from '../assets/git.svg'
import js from '../assets/js.svg'
import nodejs from '../assets/nodejs.svg'
import postgress from '../assets/postgress.svg'
import python from '../assets/python.svg'
import react from '../assets/react.svg'
import sql from '../assets/sql.svg'
import ts from '../assets/ts.svg'


const Home = () => {
    return (
        <div id='home' className="main">
            <h1>Welcome! My name is Sergey Fruman.</h1>
            <h2>I'm a Full-Stack Developer</h2>
            <div>
                <h3>About:</h3>
                <p>I am a highly motivated full-stack developer with a background in medicine and with proven experience in Python, JavaScript, Node.js, React, and TypeScript. I have worked on various projects across the development lifecycle, from front-end design to back-end integration. My passion for building innovative solutions and my dedication to contributing to high-performing teams make me a valuable asset to any project. I am eager to apply my skills and knowledge to web development and continue my professional growth in this field.</p>
            </div>
            <div>
                <h3>Skills:</h3>
                <div className="skills">
                    <img src={css} alt="CSS" />
                    <img src={html} alt="HTML" />
                    <img src={bootstrap} alt="Bootstrap" />
                    <img src={git} alt="Git" />
                    <img src={js} alt="JavaScript" />
                    <img src={ts} alt="TypeScript" />
                    <img src={nodejs} alt="Node.js" />
                    <img src={postgress} alt="PostgreSQL" />
                    <img src={python} alt="Python" />
                    <img src={react} alt="React" />
                    <img src={sql} alt="SQL" />
                </div>
            </div>
        </div>
    )
}

export default Home;