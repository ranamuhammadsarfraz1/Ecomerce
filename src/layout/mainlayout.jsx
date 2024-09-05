import { Navbar } from "../components/navbar";
import Footer from "../components/footer";

const MainLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
