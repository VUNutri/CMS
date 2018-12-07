import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import registerServiceWorker from '../registerServiceWorker';
import Routes from '../Routes';
import logo from './App/img/logo.png';
import './NavBar.css';

class NavBar extends React.Component {

  constructor() {
    super();
    this.state = { loggedIn: false };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          <img src={logo} className="logo" alt="VU Nutri" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/">HOME</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/products">PRODUCTS</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to="/recipes">RECIPES</Link></a>
              </li>
            </ul>
          </div>
        </nav>
        <Routes />
      </div>
    );
  }
}

registerServiceWorker();

export default NavBar;