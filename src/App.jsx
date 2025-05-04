import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Navbar from './component/navbar/Navbar'
import Products from './pages/products/Products'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products />} />
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App
