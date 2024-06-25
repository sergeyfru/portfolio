// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Nav = () => {
//     return (
//         <header>
//             <nav>
//                 <div style={{ marginRight: '50px' }}>
//                     <h1>Sergey Fruman</h1>
//                     <h3>Full-Stack Developer</h3>
//                 </div>
//                 <NavLink exact to={'/'} activeClassName="active">Home</NavLink>
//                 <NavLink to={'/projects'} activeClassName="active">Projects</NavLink>
//                 <NavLink to={'/contacts'} activeClassName="active">Contacts</NavLink>
//             </nav>
//         </header>
//     );
// }

// export default Nav;

const Nav =()=>{

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
          <nav>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
                <button onClick={() => scrollToSection('contacts')}>Contacts</button>
            </nav>
        </>
    )
}

export default Nav