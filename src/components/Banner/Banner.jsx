import styles from "./Banner.module.css"
import { MainBanner } from "../../assets";

export const Banner = () => {
  return <>

  <div className={styles.banner}>
  <div className={styles.container}>
  <div className={styles.content}>
  <h3 className={styles.slogan}>Pro.Beyond.</h3>
  <span className={styles.slogan__main}>IPhone 14 <b>Pro</b> </span>
  <span className={styles.slogan__second}>Создан, чтобы сделать мир лучше. Для каждого</span>
  <button  className={styles.button}> Купить сейчас</button>
  </div>
  <div className={styles.imagewrapper}>
    <img src={MainBanner} />
  </div>
</div>
  </div>
 
  
  </>
};
