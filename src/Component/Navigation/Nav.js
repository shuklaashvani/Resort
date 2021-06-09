import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Nav.module.css';
import Logo from '../Images/Logo/logo1.png';


const Nav = () => {
    return(
        <div className={classes.Navigation}>
            <img src={Logo} />          
             <NavLink exact activeClassName={classes.active_class} to='/' className={classes.Home}>Home</NavLink>             
             <NavLink exact activeClassName={classes.active_class} to='/Rooms' className={classes.Rooms}>Rooms</NavLink>             
           
        </div>
    );
}

export default Nav;