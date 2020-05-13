import React from 'react'
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <div>
            <nav id="klein" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow">
                <span className="navbar-brand">John Huntsperger</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={"/index/"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={"/portfolio/"}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={"/contact/"}>Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}
export default Nav
