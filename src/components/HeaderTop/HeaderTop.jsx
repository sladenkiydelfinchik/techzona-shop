import { Link } from "react-router-dom";
import styles from "./HeaderTop.module.css";
import { logo, search, cart } from "../../assets";
export const HeaderTop = () => {
  return (
    <>
      <div className={styles.wrapper, styles.container}>
        <Link to={"/"}>
        <img src={logo} alt="logo"/>
        </Link>
         <div className={styles.inputWrapper}> <img src ={search} className={styles.search}/>
          <input
            type="text"
            className={styles.input}
            placeholder="Поиск"
          />
          </div>
          <img
            src={cart}
            alt="Cart"
            className={styles.cart}
          />
          </div>
    </>
  );
};
