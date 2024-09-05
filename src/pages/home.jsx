import AboutSection from "../components/aboutsectionhome";
import ShopByCategory from "../components/categories";
import FeaturedProducts from "../components/featuredproducts";
import HeroSection from "../components/herosection";
import SubscriptionSection from "../components/subscription";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ShopByCategory />
      <AboutSection />
      <SubscriptionSection />
    </>
  );
};

export default Home;
