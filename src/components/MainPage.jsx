import { Banner } from "./Banner/Banner";
import { SmallBanner } from "./SmallBanners/SmallBanner";
import { Category } from "./Category/Category";
import { Products } from "./Products/Products";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SmallBanner />
      <Category />
      <Products />
      <Footer />
    </>
  );
};
