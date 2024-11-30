import './Header.scss'
import { Link, useLocation } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.min'

const Header = () => {
  const currentRoute = useLocation();
  return (
    <div className='header-section-wrapper'>
      <div className="container">
        <div className="header-section clearfix">
          <nav className="top-navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="header-section-content clearfix">
                <div className="content-left">
                  <Link to="/" className="navbar-brand">
                    <div className="brand">
                      Weird<span>Case</span>
                    </div>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="content-right">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className={currentRoute.pathname === "/" ? "nav-link active" : "nav-link"}>Dashboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/whoweare" className={currentRoute.pathname === "/whoweare" ? "nav-link active" : "nav-link"}>Who we are</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/blog" className={currentRoute.pathname === "/blog" ? "nav-link active" : "nav-link"}>Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/playground" className={currentRoute.pathname === "/playground" ? "nav-link active" : "nav-link"}>Playground</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/resources" className={currentRoute.pathname === "/resources" ? "nav-link active" : "nav-link"}>Resources</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className={currentRoute.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

