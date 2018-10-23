import React from 'react';
import './DrawerToggleBtn.css';

const drawerToggleBtn = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);

export default drawerToggleBtn;