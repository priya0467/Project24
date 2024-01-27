import React, { useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Layout/Header';
import Avialbemeals from './Component/Meals/Avilablemeals';
import CartProvider from './Store/CartProvider';

function App() {
  const[cartIsshown,setCartIsShown]=useState(false);


  const showCartHandeler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandeler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider className="App">
      {cartIsshown&&<Cart onClose={hideCartHandeler}/>}
      <Header onShowCart={showCartHandeler}/>
      <Avialbemeals/>
    </CartProvider>
  );
}

export default App;
