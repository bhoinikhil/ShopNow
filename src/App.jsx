import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer from './layout/Footer.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import MyNavbar from './layout/MyNavbar.jsx';
import Men from './pages/Men.jsx';
import Women from './pages/Women.jsx';
import Kids from './pages/Kids.jsx';
import Seller from './sellerSection/Seller.jsx';
import Product from './pages/Product.jsx';
import { useEffect, useState } from 'react';
import axios from "axios"
import Cart from './pages/Cart.jsx';
import Account from './pages/Account.jsx';
import BuyNow from './pages/BuyNow.jsx';


function App() {
  //Api Fetching
 const[product,setProduct]=useState([])
 const fetch= async()=>{
     const response =await axios.get("http://localhost:2031/products")
     setProduct(response.data)
 }
 useEffect(()=>{
      fetch()
      
 },[product])

 const[cartId,setCartId]=useState([])
 const add =(obj)=>{
  setCartId([...cartId, obj])
    
 }

  return (
    <div className='main-container  bg-light p-0 overflow-hidden position-relative'>
        <BrowserRouter>
        <div className="row">
          <div className="col-12">
          <MyNavbar cartId ={cartId} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-0 ">
          <Routes>
            <Route path='/' element={<Home  product ={product} add={add} />} />
            <Route path='/men' element={<Men product ={product} add={add} />} />
            <Route path='/women' element={<Women product ={product} add={add} />} />
            <Route path='/kids' element={<Kids product ={product} add={add} />} />
            <Route path='/about' element={<About />} />
            <Route path='/account' element={<Account />} />
            <Route path='/seller' element={<Seller />} />
            <Route path='/cart' element={<Cart cartId={cartId} setCartId={setCartId}/>} />
            <Route path='/product/:proId' element={<Product add={add} />} />
            <Route path='/buyNow/' element={<BuyNow />} />
          </Routes>

          </div>
        </div>
        </BrowserRouter>
      <Footer />
    </div>

  )
}

export default App;
