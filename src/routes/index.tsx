import { Routes, Route } from "react-router-dom";
import paths from "./paths";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.shop} element={<Shop />} />
      <Route path={paths.productDetails} element={<ProductDetails />} />
      <Route path={paths.blog} element={<Blog/>} />
      <Route path={paths.about} element={<About />} />
      <Route path={paths.contact} element={<Contact />} />
      <Route path={paths.cart} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes