import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Categoty from "../pages/Category";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/category" element={<Categoty />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default GlobalRoutes;
