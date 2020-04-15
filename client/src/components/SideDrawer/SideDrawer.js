import React from 'react';
import './SideDrawer.css'


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/search">Search</a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/forum/:id">Forum</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;