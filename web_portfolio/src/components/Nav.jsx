import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <nav>
                <NavLink exact to={'/'} activeClassName="active">Home</NavLink>
                <NavLink to={'/projects'} activeClassName="active">Projects</NavLink>
                <NavLink to={'/contacts'} activeClassName="active">Contacts</NavLink>
            </nav>
        </header>
    );
}

export default Nav;