import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App