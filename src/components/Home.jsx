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
import vite from '../../public/vite.svg'
import Introducing from './Introducing.jsx'
import Projects from './Projects.jsx'
import Contacts from './Contacts'

const Home = () => {
    return (
        <>
        <Introducing />
        <Projects />
        <Contacts />    
     </>
    )
}

export default Home;