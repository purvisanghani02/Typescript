import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Addcart from "../pages/Addcart";
import Navbar from "../components/Navbar";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<Addcart />} />
      </Routes>
    </>
  );
};

export default Routing;
