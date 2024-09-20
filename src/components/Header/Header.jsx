import { HeaderTop } from "../HeaderTop/Headertop";
import { SubNav } from "../SubNav/SubNav";
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
        <HeaderTop />
        <SubNav />
        </header>
      </div>
    </>
  );
};
