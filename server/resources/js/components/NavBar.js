import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';

const NavBar = ({auth, ...props}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SpaceGame</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        routes[auth].map((route, i) => 
                            <li key={`navbar_item_${i}`} className="nav-item">
                                <Link key={i} className="nav-link" to={route.path}>{route.label}</Link>
                            </li>
                        )
                    }
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;