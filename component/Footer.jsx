import Image from "next/image";
import Styles from "../styles/Footer.module.css";
import Link from "next/link";

function Footer(){
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>
            <Link href="/privacypolicy">
            <a>
              Privacy Policy</a></Link>
            </li>
          
          <li className={Styles.listItem}> 
          <Link href="/returnterms">
            <a>
          Return Terms </a>
          </Link>
          </li>
          
          
          <li className={Styles.listItem}>
            <Link href="contactus">
              <a>
                Contact us
                </a></Link>
            </li>
          
          
        </ul>
        </div>
        <div>
          
        <p>
                  Copyright &copy; Savage Denims 2022
        </p>
        
</div>
</div>
  );
};

export default Footer;
