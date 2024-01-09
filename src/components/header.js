import { useState } from 'react';
import styles from '../styles/Header.module.scss'
console.log(styles);
import Link from 'next/link';
export default function Header() {
    const [navIsOpen, setNaviIsOpen] = useState(false);
    const toggleNav = () => {
        setNaviIsOpen((prev) => !prev)
    }
    const closeNav = () => {
        setNaviIsOpen(false)
    }
    return (
        <header className={styles.header} >
            <div className={styles.header__content} >
                <Link href={'/'}>TOP</Link>
                <nav className={navIsOpen ? styles.nav_open : styles.nav_close}>
                    <button className={styles.nav__btn} onClick={toggleNav}>MENU</button>
                    <ul className={styles.nav__menu}>
                        <li className={styles['nav__menu--item']}>
                            <Link href={'/about/'} onClick={closeNav}>ABOUT</Link>
                        </li>
                        <li className={styles['nav__menu--item']}>
                            <Link href={'/about/'} onClick={closeNav}>ABOUT</Link>
                        </li>
                        <li className={styles['nav__menu--item']}>
                            <Link href={'/about/'} onClick={closeNav}>ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}