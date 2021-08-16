import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-expand navbar-dark border-bottom border-white d-flex flex-wrap">
      <h1 className="m-2">Superhero</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Team
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/search"
              >
                Search
              </Link>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
