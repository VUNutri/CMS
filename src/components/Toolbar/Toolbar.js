import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from '../img/logo.png'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
<a href="/">
<img src={logo} className="navbarLogo" alt="Nutri logo" /></a>
</div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="#">Produktai</a></li>
                <li><a href="#">Receptai</a></li>
            </ul>
        </div>
    </nav>
  </header>

);

export default toolbar;

