import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Mens from './pages/Category/Mens';
import Womens from './pages/Category/Womens';
import Kids from './pages/Category/Kids';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import ContactUs from './pages/ContactUs';
import Invoice from './pages/Invoice';
import { CartProvider } from "react-use-cart";
// import './App.css';

function App() {
  const storeName = "e-Shop";
  return (
    <CartProvider storeName={storeName}>
      <BrowserRouter>
        <Routes>

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Invoice/:orderId" element={<Invoice />} />


        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
