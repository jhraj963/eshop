import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AllProducts from './pages/AllProducts';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import ContactUs from './pages/ContactUs';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />
        <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/MyAccount" element={<MyAccount />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/ContactUs" element={<ContactUs />} />


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
