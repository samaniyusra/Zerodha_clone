import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_Page/home/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./landing_Page/pricing/PricingPage.js";
import AboutPage from "./landing_Page/about/AboutPage.js";
import ProductPage from "./landing_Page/product/ProductPage.js";
import SignUp from "./landing_Page/signUp/SignUp.js";
import SupportPage from "./landing_Page/support/SupportPage.js";
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import PageNotFound from "./landing_Page/PageNotFound.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/support' element={<SupportPage />} />
      
      <Route path='*' element={<PageNotFound />} />

    </Routes>

    <Footer /> 
  </BrowserRouter>
);
