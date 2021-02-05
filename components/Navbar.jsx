
import React from 'react';
import s from './Navbar.module.css';

/*let Style =()=>{
'':'';
'':'';
}*/


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a src='#'>Profile</a>
        </div>
        <div className={s.item}>
            <a src='#'>Messages</a>
        </div>
        <div className={s.item}>
            <a src='#'>News</a>
        </div>
        <div className={s.item}>
            <a src='#'>Music</a>
        </div>
    </nav>
}
export default Navbar;