import Image from 'next/image'
import Styles from '../Styles/Navbar.module.css'
import Link from "next/link";

function Navbar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <Image src="/img/logo1.png" width={230} height={70} alt="/" />
      </div>
      <div className={Styles.item}>


        <ul className={Styles.list}>



          <li className={Styles.listItem}><Link href='/'><a>Home</a></Link></li>
          <li className={Styles.listItem}><Link href='/product'><a>Product</a></Link></li>

          <li className={Styles.listItem}><Link href='/lookbook'><a>LookBook</a></Link></li>


          <li className={Styles.listItem}><Link href='/giftcards'><a>Gift Card</a></Link></li>
        </ul>
      </div>
     
        <div className={Styles.item}>
        <Link href="/cart" passHref>
          <div className={Styles.cart}>

            <Image src="/img/cart.png" alt="" width="30px" height="30px" />

            <div className={Styles.counter}>30</div>
          </div>
        
      </Link>
      </div>
    </div>





  );
}

export default Navbar
