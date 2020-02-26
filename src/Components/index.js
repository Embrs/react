import React from 'react';
import { Link } from 'react-router-dom';
import pages from 'Route/paths';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={pages.Login}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={pages.Dashboard}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/electronics"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Info
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={pages.Page1}>
                Page1
              </Link>
              <Link className="dropdown-item" to={pages.Page2}>
                Page2
              </Link>
              <Link className="dropdown-item" to={pages.Page3}>
                Page3
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
