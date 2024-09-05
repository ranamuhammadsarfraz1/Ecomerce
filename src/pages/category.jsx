import AboutSection from "../components/aboutsectionhome";
import ShopByCategory from "../components/categories";
import HeroSectionGeneral from "../components/herosectiongeneral";
import SubscriptionSection from "../components/subscription";

const Category = () => {
  return (
    <>
      <HeroSectionGeneral />
      <ShopByCategory />
      <AboutSection />
      <SubscriptionSection />
    </>
  );
};

export default Category;
