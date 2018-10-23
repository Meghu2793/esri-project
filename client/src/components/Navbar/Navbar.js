import React from 'react';
import './Navbar.css';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';
import { NavLink } from 'react-router-dom';

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="navbar__toogle-button">
        <DrawerToggleBtn click={props.drawerClickHandle} />
      </div>
      <div className="toolabar_logo">
        <a href="/">ESRI</a>
      </div>
      <div className="spacer"></div>
      <div className="toolabar_navigation-items">
        <ul>
          <li>
            <NavLink to="/Readme">ReadMe Page</NavLink>
            {/* <a href="/Readme">Home Page</a> */}
          </li>
          <li>
            <NavLink to="/StoryPage">Story Page</NavLink>
            {/* <a href="/">Story Page</a> */}
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;