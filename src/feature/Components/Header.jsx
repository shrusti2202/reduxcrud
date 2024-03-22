import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
           
            <div className="p-5 bg-success text-white text-center">
                <h1>Welcome to our site</h1>
            </div>
            <nav className="navbar navbar-expand-sm bg-warning text-dark text-center ">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header