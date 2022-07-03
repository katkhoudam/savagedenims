import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";



const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>


      
        <div className={styles.imgBx}>
          <Image src={'/shirt2.jpg'} layout={'fill'} alt="" />
        </div>
        
        
    <div className={styles.title}>
        <div className={styles.content}>
          <h3>JEANS CARD</h3>
          <h4 className={styles.details}> product details
          </h4>
          <h2 className={styles.h3}>EGP600</h2>
          <button className={styles.button}>
            <span><h5>BUY NOW</h5></span>
          </button>

        </div>
    </div>
    </div>
   
      
  
  );
};

export default ProductCard;
