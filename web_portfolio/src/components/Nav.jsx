import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    return(
        <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>{' '}
          <NavLink to={'/projects'}>Projects</NavLink>{' '}
          <NavLink to={'/contacts'}>Contacts</NavLink>{' '}
        </nav>
      </header>
    )
}
export default Nav