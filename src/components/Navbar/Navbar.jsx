import React from 'react';
import s from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink} className={s.lin}>Profiles</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink} className={s.lin}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink} className={s.lin}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink} className={s.lin}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink} className={s.lin}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;