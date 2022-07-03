import styles from "../styles/Productlist.module.css";
import ProductCard from "./ProductCard";

export function ProductList(productList) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST JEANS IN TOWN</h1>
      <p className={styles.desc}>

      </p>
      
      <div className={styles.grid}>
        <div className={styles.card}>
        <ProductCard />
        <ProductCard />
        <ProductCard /> 
        <ProductCard />
      </div>
      </div>
    </div>
  );
}
