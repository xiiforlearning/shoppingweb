import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Categoty from "../pages/Category";
import Product from "../pages/Product";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";

function GlobalRoutes() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Categoty />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default GlobalRoutes;
