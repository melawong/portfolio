import { Link } from "react-router-dom";

function Navbar() {

  function renderLinks() {
    return (
      <>
        <li className="nav-item">
          <Link to={`/about`} className="nav-link" href="#">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/projects`} className="nav-link" href="#">
            Projects
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={`/`} className="navbar-brand " href="#">
            <strong>Melanie Wong</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ms-auto">{renderLinks()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
