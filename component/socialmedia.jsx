import Image from 'next/image'
import Styles from "../styles/Socialmedia.module.css"

export default function Socialmedia() {
  return (
          <>
    <div className={Styles.container}>
    <div className={Styles.facebook}>
 <Image src="/img/facebook.png" alt="" width="30px" height="30px" />
 </div>
 <div className={Styles.instagram}>
 <Image src="/img/instagram.png" alt="" width="30px" height="30px" />
 </div>
 <div className={Styles.item}>
 <Image src="/img/tiktok.png" alt="" width="30px" height="30px" />
</div>

    </div>
    </>
  )
}

