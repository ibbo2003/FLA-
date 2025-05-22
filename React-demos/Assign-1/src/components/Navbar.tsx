import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <Link className="navbar-brand text-dark" to="/">
          Assigments
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/recipe">
                  Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
