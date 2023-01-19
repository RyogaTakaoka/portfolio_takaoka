import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/works.module.scss'
import { Header, HeaderMenu } from 'parts/Header/Header'
import { Base } from 'parts/Base/Base'

const inter = Inter({ subsets: ['latin'] })

export default function Works() {
  return (
    <div className={styles.body}>
      <Base>
      <HeaderMenu/>
      <p className={styles.title}>Works</p>

      <div className={styles.workGroup}>
        <div>
          <img src = "/SuperRunningMan.png" alt="Super Running Man"/>
          <p className={styles.gametitle}>Super Running Man</p>
        </div>
        <div>
          <p className={styles.text}>操作はジャンプとパンチのみの2D横スクロールアクションゲーム。食べた肉の種類に応じてステータスが変化するキャラクターを操作し、立ちはだかる古代生物を乗り越えゴールを目指す。プログラム全般を担当。</p>
        </div>
      </div>

      <div className={styles.workGroup}>
        <div>
        <p className={styles.text}>Joyconを用いて操作するリズムゲーム。Joyconを傾けることでDJミキサーのツマミを再現するなど、DJと似たような操作感・臨場感を体験できる。Joyconの入力判定を担当。</p>
        </div>
        <div>
          <img src = "/MIXTREAM.png" alt="MIXTREAM"/>
          <p className={styles.gametitle}>MIXTREAM</p>
        </div>
      </div>
      
      <div className={styles.workGroup}>
        <div>
          <img src = "/BarWar.png" alt="BarWar"/>
          <p className={styles.gametitle}>決戦！バルバトス</p>
        </div>
        <div>
          <p className={styles.text}>制限時間内に無限に湧いてくるバルバトスを倒した数で最高スコアを狙うスコアアタックゲーム。一日でプランニングから完成させたバカゲー。全てを担当。</p>
        </div>
      </div>

      </Base>
    </div>
  )
}