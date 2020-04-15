import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const navbar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="navbar__logo"><a href="/">THE LOGO</a></div>
                <div className="spacer" />
                <div className="navbar_navigation-items">
                    <ul>
                        <li><a href="/signUp">Sign Up</a></li>
                        <li><a href="/user/:id">User</a></li>

                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default navbar;