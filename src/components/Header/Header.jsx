import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKxcDSRGwa7qh3N_ruLIohRtV9Dr6GvCU7w&s'
                 alt='logo'/>
        </header>
    );
}

export default Header;