import React from 'react';
import '../Css/navbar.css';
import PropTypes from 'prop-types';
import logo from './Images/newLogo.png';
const Navbar = () => {
    return (
                <nav>
                    <ul className={'topnav'}>
                        <li><a href={'/home'}><img className={'logo'} src={logo}/></a></li>
                        <li className={'right'}><a href={'/contact'}>İletişim</a></li>
                    </ul>
                </nav>
            );
};

Navbar.propTypes = {};

export default Navbar;

