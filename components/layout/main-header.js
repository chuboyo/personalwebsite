import Link from 'next/link';
import React from 'react';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>Home</Link>
        </div>
        <div className={classes.logo}>
            <Link href='https://www.linkedin.com/in/akoji-chubiyojo-a8b505175/'><i className="fa-brands fa-linkedin"></i></Link>&nbsp;&nbsp;
            <Link href='https://github.com/chuboyo'><i className="fa-brands fa-github"></i></Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}

export default MainHeader