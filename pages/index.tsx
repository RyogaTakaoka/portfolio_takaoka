import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { Header, HeaderMenu } from 'parts/Header/Header'
import { Base } from 'parts/Base/Base'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <Base>
        <HeaderMenu/>
        <p className={styles.title}>About</p>
        <div className={styles.textGroup}>
          <div className={styles.text}>
            <p>Name:</p>
            <p>Age:</p>
            <p>Gender:</p>
            <p>Day of birth:</p>
            <p>Blood type:</p>
            <p>Birthplace:</p>
          </div>
          <div className={styles.text}>
            <p>Ryoga Takaoka</p>
            <p>23</p>
            <p>♂</p>
            <p>7/19</p>
            <p>A</p>
            <p>Osaka</p>
          </div>
        </div>
      </Base>
    </div>
  )
}
