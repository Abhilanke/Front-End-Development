import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="Contect">Contect</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
