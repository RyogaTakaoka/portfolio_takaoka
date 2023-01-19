import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export const Header:React.FC = ()=>{
    return(
        <div className={styles.Header}>
            <p className={styles.title}>Ryoga Takaoka</p>
            <p className={styles.subtitle}>~ Takaoka's Portfolio ~</p>
        </div>
    )
}

export const HeaderMenu:React.FC = ()=>{
    return(
        <div className={styles.headerMenu}>
            <ul className={styles.menuList}>
                <p className={styles.menu}><Link href = "/">ABOUT</Link></p>
                <p className={styles.menu}><Link href = "/myhobby">HOBBY</Link></p>
                <p className={styles.menu}><Link href = "/works">WORKS</Link></p>
            </ul>
        </div>
    )
}