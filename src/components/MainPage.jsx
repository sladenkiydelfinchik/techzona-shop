import { Header } from "./Header";
import { Banner } from "./Banner";
import { SmallBanner } from "./SmallBanner";
import { Category } from "./Category";
import { Products } from "./Products";
import { Footer } from "./Footer";

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
