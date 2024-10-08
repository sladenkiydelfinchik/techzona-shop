import styles from "./Products.module.css";
import { Product } from "../Product/Product";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/iphone14.png",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 4,
    name: "AirPods Max Silver",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 6,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 7,
    name: "Galaxy Buds FE Graphite",
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: "19 990",
    image: "/techzona-shop/src/assets/TempProductImages/camera.png",
  },
];

export const Products = () => {
  return (
    <>
      <section className={styles.products}>
        <div className={styles.tags}>
          <span className={styles.selected}>Новые поступления</span>
          <span>Бестселлеры</span>
          <span>Рекомендуемое</span>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};
