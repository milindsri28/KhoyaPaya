
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home-icon.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const name = Cookies.get('isLogedIn');
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('isLogedIn');
    navigate('/');
    window.location.reload(true);
  };

  return (
    <div className="fullPage">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={homeIcon} alt="Bootstrap" width="30" height="24" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link active" aria-current="page">
                  About-Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addadhar" className="nav-link">
                  Add Aadhar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/updateAdhar" className="nav-link">
                  Update Aadhar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recognition" className="nav-link">
                  Recognition
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact-Us
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              {name ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                  <Link to="/register" style={{ margin: '10px' }}> 
                    <button>Register</button>
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
