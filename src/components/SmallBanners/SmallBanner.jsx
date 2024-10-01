import styles from "./SmallBanner.module.css"
import { sbAirpods } from "../../assets";
import { sbPs5 } from "../../assets";

export const SmallBanner = () => {
  return <>
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={`${styles.div1} ${styles.product}`}>Apple 
        AirPods Max
        Компьютерный звук. Послушайте, это мощно</div>
        <div className={`${styles.div2} ${styles.product}`}>Apple 
        Vision Pro
        Захватывающий способ насладиться развлечениями</div>
        <div className={`${styles.div3} ${styles.product}`}>
          <div className={styles.product__image_wrapper}>
            <img src={sbPs5} />
          </div>
          <div className={styles.product__text_wrapper}>
            <h3>Playstation 5</h3>
            <p>Невероятно мощные центральные и графические процессоры, а также твердотельный накопитель со встроенным интерфейсом ввода-вывода позволят по-новому взглянуть на работу с PlayStation.</p>
          </div>
 
        </div>
        <div className={`${styles.div4} ${styles.product}`}>Macbook Air
        В новом 15‑дюймовом MacBook Air с большим дисплеем Liquid Retina есть место для большего количества ваших любимых функций.
        </div>
      </div>
      </div>
  </>
};
