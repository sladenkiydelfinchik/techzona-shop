import styles from "./SmallBanner.module.css";
import { sbPs5, sbAirpods, sbMbp, sbVision } from "../../assets";

export const SmallBanner = () => {
  return (
    <>
      <div>
        <div className={styles.parent}>
          <div
            className={`${styles.div1} ${styles.product} ${styles.product__smallbanner_s}`}
          >
            <div className={styles.product__image_wrapper}>
              <img src={sbAirpods} />
            </div>
            <div className={styles.product__text_wrapper}>
              <h3>
                Apple AirPods <br /> <b>Max</b>
              </h3>
              <p>Компьютерный звук. Послушайте, это мощно</p>
            </div>
          </div>
          <div
            className={`${styles.div2} ${styles.product}  ${styles.product__smallbanner_s}`}
          >
            <div className={styles.product__image_wrapper}>
              <img src={sbVision} />
            </div>
            <div className={styles.product__text_wrapper}>
              <h3 className={styles.header_white}>
                Apple <br />
                Vision <b>Pro</b>
              </h3>
              <p>Захватывающий способ насладиться развлечениями</p>
            </div>
          </div>
          <div
            className={`${styles.div3} ${styles.product} ${styles.product__smallbanner_m}`}
          >
            <div className={styles.product__image_wrapper}>
              <img src={sbPs5} />
            </div>
            <div className={styles.product__text_wrapper}>
              <h3>Playstation 5</h3>
              <p>
                Невероятно мощные центральные и графические процессоры, а также
                твердотельный накопитель со встроенным интерфейсом ввода-вывода
                позволят по-новому взглянуть на работу с PlayStation.
              </p>
            </div>
          </div>
          <div
            className={`${styles.div4} ${styles.product} ${styles.product__smallbanner_l}`}
          >
            <div className={styles.product__text_wrapper}>
              <h3>
                Macbook <b>Air</b>
              </h3>
              <p>
                Macbook Air В новом 15‑дюймовом MacBook Air с большим дисплеем
                Liquid Retina есть место для большего количества ваших любимых
                функций.
              </p>
              <button>Купить сейчас</button>
            </div>
            <div className={styles.product__image_wrapper}>
              <img src={sbMbp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
