// import { useState } from 'react'
import './App.css'
// components import 
import Cart from './components/Cart'
import Products from './components/Products'

function App() {

  return (
    <>
    <div style = {{textAlign: 'center', marginTop:'50px'}}> 
      <h1> redux cart (with toolkit) </h1>
      {<Products/>}
      {<Cart/>}
    </div>
    </>
  )
}

export default App
