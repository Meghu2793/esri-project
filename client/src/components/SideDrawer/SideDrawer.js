import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open'; 
    }
    return (
    <nav className={drawerClasses}>
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
    </nav>
    );
}

export default SideDrawer;