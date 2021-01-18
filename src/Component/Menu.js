import React from 'react';
import { NavLink } from 'react-router-dom'
const Navmenu = () => {
    return (

        <>
            <ul className="nav main_menu">
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="active" aria-current="page" className="nav-link"><span className="fa fa-home"></span><i>Home</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" activeClassName="active" className="nav-link"><span className="fa fa-black-tie"></span> <i>Blog</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active" className="nav-link"><span className="fa fa-user-circle-o"></span> <i>About Us</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active" className="nav-link"><span className="fa fa-address-card-o"></span> <i>Portfolio</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/user" activeClassName="active" className="nav-link"><span className="fa fa-address-user"></span> <i>Users</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/news" activeClassName="active" className="nav-link"><span className="fa fa-news"></span> <i>News List</i></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active" className="nav-link"><span className="fa fa-envelope-o"></span> <i>Contact Us</i></NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navmenu;