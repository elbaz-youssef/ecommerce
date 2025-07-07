import { Routes, Route } from "react-router-dom";
import paths from "./paths";

import { Home, Shop, ProductDetails, Blog, About, Contact, Cart, Checkout, NotFound } from '@/pages';
import MainLayout from "@/layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.shop} element={<Shop />} />
        <Route path={paths.productDetails} element={<ProductDetails />} />
        <Route path={paths.blog} element={<Blog/>} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path={paths.cart} element={<Cart />} />
        <Route path={paths.checkout} element={<Checkout />} />
      </Route>
      <Route path={paths.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes