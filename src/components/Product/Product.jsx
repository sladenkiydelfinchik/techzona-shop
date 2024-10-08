import styles from "./Product.module.css";
export const Product = ({ name, price, image }) => {
  return (
    <>
      <div className={styles.productCard}>
        <img
          loading="lazy"
          src={image}
          alt={name}
          className={styles.productImage}
        />
        <div className={styles.textIcon}>
          <div className={styles.info}>
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productPrice}>
              {price} <span>₽</span>
            </p>
          </div>
          <button className={styles.addToCartButton}>В корзину</button>
        </div>
      </div>
    </>
  );
};
