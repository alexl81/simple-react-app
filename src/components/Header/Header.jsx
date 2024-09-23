import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKxcDSRGwa7qh3N_ruLIohRtV9Dr6GvCU7w&s'
                 alt='logo'/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;