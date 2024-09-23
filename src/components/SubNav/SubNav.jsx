import styles from "./SubNav.module.css"
export const SubNav = () => {
  return <>
   <div className={styles.subnav}>
    <div className={styles.container}>
      <ul className={styles.navlist}>
          <li className={styles.navlist__item}>
            <a href="#">Телефоны</a>
          </li>
          <li className={styles.navlist__item}>
            <a href="#">Компьютеры</a>
          </li>
          <li className={styles.navlist__item}>
            <a href="#">Смарт часы</a>
          </li>
          <li className={styles.navlist__item}>
            <a href="#">Камеры</a>
          </li>
          <li className={styles.navlist__item}>
            <a href="#">Наушники</a>
          </li>
          <li className={styles.navlist__item}>
            <a href="#">Игровое</a>
          </li>
      </ul>
        </div>
        </div>
  </>;
};
