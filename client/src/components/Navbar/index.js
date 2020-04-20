import React from 'react';
import './style.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SignIn from "../signIn"

const navbar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="navbar__logo"><a href="/">Game It</a></div>
                <div className="spacer" />
                <div className="navbar_navigation-items">
                    <ul>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/user/:id">User</a></li>
                        <li><SignIn /></li>

                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default navbar;