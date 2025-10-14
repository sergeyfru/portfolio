import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [activeLink, setActiveLink] = React.useState();
  const handleSetActive = (link) => {
    setActiveLink(link);
    console.log(link);
  };
  function scrollWithOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -81;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }
  return (
    <header>
      <nav>
        <HashLink
          scroll={scrollWithOffset}
          to={"/#introducing"}
          className={activeLink === "introducing" ? "active" : ""}
          onClick={() => handleSetActive("introducing")}
        >
          Home
        </HashLink>

        <HashLink
          scroll={scrollWithOffset}
          to={"/#projects"}
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => handleSetActive("projects")}
        >
          Projects
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to={"/#contacts"}
          className={activeLink === "contacts" ? "active" : ""}
          onClick={() => handleSetActive("contacts")}
        >
          Contacts
        </HashLink>
      </nav>
    </header>
  );
};

export default Header;
