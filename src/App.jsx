import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Veg from './Veg';
import NonVeg from './NonVeg';
import Home from './Home';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Orders from './Orders';
import './Menubar.css'; // Make sure to import the CSS
import Milk from './Dairy';
import Chocolates from './Chocolates';
import './Chocolates.css';
import './Veg.css';

import './Home.css';
import './Cardqr.css';
import './Footer.css';
import './Dairy.css';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';


function App() {
  
const isAuthenticate = useSelector((state) => state.users.isAuthenticate);
const currentUser = useSelector(state => state.users.currentUser);


  let cartItems = useSelector((state) => state.cart);
  let cartCount = cartItems.reduce((count, item) => count + item.quantity,0)
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to='/Home'> 🏠Home</Link>
        <Link to='/Veg'>🍆VegItems</Link>
        <Link to='/NonVeg'>🍗NonVegItems</Link>
        <Link to='/Milk'>🥛Dairy</Link>
        <Link to='/Chocolates'>🍫Chocolates</Link>
        <Link to='/Orders'>📦Orders</Link>
        <Link to='/AboutUs'>👤 AboutUs</Link>
        <Link to='/Cart'>Cart({(cartCount)})</Link>
        {isAuthenticate ?
        <button>Logout</button> :
        <Link to='/Login'>SignIn</Link>
      }
      </nav>
      <Routes>
        <Route path='/Veg' element={<Veg />} />
        <Route path='/NonVeg' element={<NonVeg />} />
         <Route path='/Home' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Milk' element={<Milk />} />
        <Route path='/Chocolates' element={<Chocolates />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Login' element={<Login />} />
         <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
