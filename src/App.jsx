import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Category from "./pages/category";
import Home from "./pages/home";
import Product from "./pages/product";
import Error from "./pages/error";
import ProductDetail from "./pages/product-details";
import About from "./pages/about";
import OrderSummary from "./pages/ordersummary";
import Profile from "./pages/profile";
import PrivateRoute from "./components/privateroute";
import UserAuth from "./pages/userauth";
import CategoryProduct from "./pages/categoryproduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="categories"
          element={
            <MainLayout>
              <Category />
            </MainLayout>
          }
        />
        <Route
          path="/category-product/:categoryID"
          element={
            <MainLayout>
              <CategoryProduct />
            </MainLayout>
          }
        />
        <Route
          path="products"
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />
        <Route
          path="/product-details/:productID"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />
        <Route
          path="about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="ordersummary"
          element={
            <MainLayout>
              <OrderSummary />
            </MainLayout>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <MainLayout>
                <Profile />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="userauth" element={<UserAuth />} />
      </Routes>
    </>
  );
};

export default App;
