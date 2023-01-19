import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/myhobby.module.scss'
import { Header, HeaderMenu } from 'parts/Header/Header'
import { Base } from 'parts/Base/Base'

const inter = Inter({ subsets: ['latin'] })

export default function MyHobby() {
  return (
    <div className={styles.body}>
      <Base>
        <HeaderMenu/>
        <p className={styles.title}>My Playing Games</p>

        <p className={styles.subtitle}>Sosial Game</p>
        <img src = "/pazdra.png" alt="パズドラ" className={styles.appIconImg}/>
        <img src = "/fgo.png" alt="FGO" className={styles.appIconImg}/>
        <img src = "/purikone.jfif" alt="プリコネ" className={styles.appIconImg}/>
        <img src = "/umamusume.webp" alt="ウマ娘" className={styles.appIconImg}/>
        <img src = "/proseka.webp" alt="プロセカ" className={styles.appIconImg}/>
        
        <p className={styles.subtitle}>Cosole Game</p>
        <img src = "/pokemonv.jpg" alt="ポケットモンスター　バイオレット" className={styles.gameIconImg}/>
        <img src = "/spla.webp" alt="スプラ" className={styles.gameIconImgWlong}　/>

        <p className={styles.subtitle}>PC Game</p>
        <img src = "/apex.jpg" alt="APEX" className={styles.gameIconImgWlong}/>
        <img src = "/monhun.jpg" alt="MONSTER HUNTER RISE SUNBREAK" className={styles.gameIconImgWlong}　/>

        <p className={styles.subtitle}>Arcade Game</p>
        <img src = "/chunithm.jpg" alt="CHUNITHM" className={styles.gameIconImgWlong}/>
      </Base>
    </div>
  )
}