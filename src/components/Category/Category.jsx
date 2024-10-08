import styles from "./Category.module.css";

export const Category = () => {
  const categories = [
    {
      icon: "/techzona-shop/src/assets/svg/48/Phones.svg",
      name: "Телефоны",
    },
    {
      icon: "/techzona-shop/src/assets/svg/48/SmartWatches.svg",
      name: "Смарт часы",
    },
    {
      icon: "/techzona-shop/src/assets/svg/48/Cameras.svg",
      name: "Камеры",
    },
    {
      icon: "/techzona-shop/src/assets/svg/48/Headphones.svg",
      name: "Наушники",
    },
    {
      icon: "/techzona-shop/src/assets/svg/48/Computers.svg",
      name: "Компьютеры",
    },
    {
      icon: "/techzona-shop/src/assets/svg/48/Gaming.svg",
      name: "Игровое",
    },
  ];

  return (
    <>
      <section className={styles.category}>
        <div className={styles.top}>
          <h2 className={styles.title}>Ищите по категориям</h2>
          <div className={styles.arrowS}>
            <button aria-label="Previous" className={styles.arrowButton}>
              <img
                src="/techzona-shop/src/assets/static/ArrowLeft.svg"
                alt=""
              />
            </button>
            <button aria-label="Next" className={styles.arrowButton}>
              <img
                src="/techzona-shop/src/assets/static/ArrowRight.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <img src={category.icon} alt="" className={styles.categoryIcon} />
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
