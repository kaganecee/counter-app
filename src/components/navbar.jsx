import React, { Component } from 'react';

const NavBar = ({totalCounters}) => { //Stateless Functional Component (Shortcut sfc+tab )
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
     );
};
//props object special to classes. if you use sfc , then you need to define props parameter.
 
export default NavBar ;