 
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general">
          <img src="/newlogo.png" alt="NewsHub" width="80" height="50" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link nav-hover general" to="/general">Home</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover business" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover entertainment" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover health" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover science" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover sports" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link nav-hover technology" to="/technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
