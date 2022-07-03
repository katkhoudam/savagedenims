
import Link from 'next/link';
import Styles from "../styles/Hero.module.css"
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    
      <div>
        <motion.h1 className={Styles.title} 
  animation={{
    opacity: 2
  }} animate={{
    x: '20px'    
  }}
  transition={{
    type: 'tween',
    duration: 5
  }}>
          <span className={Styles.jeans}>"Jeans Dont Have To Be Boring"</span>
          <span className={Styles.mark}>For Those Who Wants To Leave a Mark</span>
          
        </motion.h1>
        
          
        
      </div>
    
  );
};

export default Hero;
