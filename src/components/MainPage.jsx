
import { Banner } from "./Banner/Banner";
import { SmallBanner } from "./SmallBanner";
import { Category } from "./Category";
import { Products } from "./Products";
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
