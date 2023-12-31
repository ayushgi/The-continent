import React from 'react';
import './Home.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ marginLeft: '20px', marginRight: '20px', color: '#00ff00', fontWeight: 'bold' }}>
          Nature
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link home-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link history-link" href="#">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link neon-button signup-link" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link neon-button login-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
