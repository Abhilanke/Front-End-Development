import "./MyNavbar.css";
import { Link, NavLink } from "react-router-dom";
const NavbarLink = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <NavLink
            to="/"
            className={(isActive) => (isActive ? "nav-link" : "mylink")}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(isActive) => (isActive ? "nav-link" : "mylink")}
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/contact"
            className={(isActive) => (isActive ? "nav-link" : "mylink")}
          >
            Contact US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarLink;
